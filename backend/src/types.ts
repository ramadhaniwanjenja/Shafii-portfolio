// Message interface
export interface Message {
  id: string;
  content: string;
  sender: "USER" | "AI";
  timestamp: string;
}

// Health check response interface
export interface HealthCheckResponse {
  status: "ok" | "error";
  message: string;
}

// Socket.IO event interfaces
export interface ServerToClientEvents {
  "ai response": (message: Message) => void;
}

export interface ClientToServerEvents {
  "chat message": (message: Message) => void;
  disconnect: () => void;
}
