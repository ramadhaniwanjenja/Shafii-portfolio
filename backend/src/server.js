require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { OpenAI } = require("openai");
const { handleContactForm } = require("./emailService");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Initialize OpenAI (optional - only if API key is provided)
let openai = null;
if (
  process.env.OPENAI_API_KEY &&
  process.env.OPENAI_API_KEY !== "sk-proj-0123456789abcdef0123456789abcdef"
) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);
app.use(express.json());

// Basic health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const contactData = { name, email, subject, message };

    // Send emails
    await handleContactForm(contactData);

    res.json({
      success: true,
      message: "Message sent successfully! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Error handling contact form:", error);

    // Provide specific error messages based on the error type
    let errorMessage = "Failed to send message. Please try again later.";

    if (
      error.message.includes("EMAIL_PASSWORD") ||
      error.message.includes("credentials")
    ) {
      errorMessage =
        "Email service is not properly configured. Please contact the administrator.";
    } else if (error.message.includes("EMAIL_USER")) {
      errorMessage =
        "Email configuration error. Please contact the administrator.";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("chat message", async (message) => {
    try {
      if (!openai) {
        socket.emit(
          "error",
          "Chat functionality is not available at the moment."
        );
        return;
      }

      // Get AI response
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant on my portfolio website. Keep responses concise and professional.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 150,
      });

      const aiResponse = completion.choices[0].message.content;

      // Send response back to client
      socket.emit("ai response", aiResponse);
    } catch (error) {
      console.error("Error getting AI response:", error);
      socket.emit(
        "error",
        "Sorry, I encountered an error processing your message."
      );
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// For Vercel serverless functions, export the app instead of listening
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3001;
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
