import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { validateConfig, SERVER_CONFIG, CORS_OPTIONS } from "./config";
import { ClientToServerEvents, ServerToClientEvents, Message } from "./types";
import { processAIResponse } from "./services/ai";

// Validate environment variables
validateConfig();

// Initialize Express app and HTTP server
const app = express();
app.use(cors(CORS_OPTIONS));
const httpServer = createServer(app);

// Initialize Socket.IO
const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: CORS_OPTIONS,
});

// Health check endpoint
app.get("/health", (_, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("chat message", async (message: Message) => {
    try {
      console.log("Received message:", message);

      // Process the message with AI
      const aiResponse = await processAIResponse(message.content);

      // Send AI response back to client
      const responseMessage: Message = {
        id: Date.now().toString(),
        content: aiResponse,
        sender: "AI",
        timestamp: new Date().toISOString(),
      };

      socket.emit("ai response", responseMessage);
    } catch (error) {
      console.error("Error processing message:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "Sorry, I encountered an error processing your message.",
        sender: "AI",
        timestamp: new Date().toISOString(),
      };
      socket.emit("ai response", errorMessage);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start the server
httpServer.listen(SERVER_CONFIG.PORT, () => {
  console.log(`Server running on port ${SERVER_CONFIG.PORT}`);
});
