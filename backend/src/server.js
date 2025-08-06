require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { OpenAI } = require("openai");
<<<<<<< HEAD
=======
const { handleContactForm } = require("./emailService");
>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
<<<<<<< HEAD
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
=======
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b
    methods: ["GET", "POST"],
  },
});

<<<<<<< HEAD
// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
=======
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
>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b
  })
);
app.use(express.json());

// Basic health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

<<<<<<< HEAD
// Chat endpoint for HTTP requests
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant on my portfolio website. Keep responses concise and professional.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 150,
    });

    const aiResponse = completion.choices[0].message.content;
    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error getting AI response:", error);
    res.status(500).json({ error: "Internal server error" });
=======
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
>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b
  }
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("chat message", async (message) => {
    try {
<<<<<<< HEAD
=======
      if (!openai) {
        socket.emit(
          "error",
          "Chat functionality is not available at the moment."
        );
        return;
      }

>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b
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

<<<<<<< HEAD
const PORT = process.env.PORT || 5000;

// For Vercel deployment
if (process.env.VERCEL) {
  module.exports = app;
} else {
=======
// For Vercel serverless functions, export the app instead of listening
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3001;
>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
<<<<<<< HEAD
=======

// Export for Vercel
module.exports = app;
>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b
