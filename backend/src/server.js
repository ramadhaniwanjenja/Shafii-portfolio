require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { OpenAI } = require("openai");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
  })
);
app.use(express.json());

// Basic health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

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
  }
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("chat message", async (message) => {
    try {
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

const PORT = process.env.PORT || 5000;

// For Vercel deployment
if (process.env.VERCEL) {
  module.exports = app;
} else {
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
