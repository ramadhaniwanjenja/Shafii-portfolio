import dotenv from "dotenv";
import { z } from "zod";
import { CorsOptions } from "cors";

// Load environment variables from .env file
dotenv.config();

// Server configuration schema
const serverConfigSchema = z.object({
  PORT: z.string().default("3001"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  OPENAI_API_KEY: z.string(),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
});

// OpenAI configuration
export const OPENAI_CONFIG = {
  model: "gpt-3.5-turbo",
  temperature: 0.7,
  max_tokens: 150,
  presence_penalty: 0,
  frequency_penalty: 0,
} as const;

// Validate environment variables
export function validateConfig() {
  try {
    const result = serverConfigSchema.parse(process.env);
    return result;
  } catch (error) {
    console.error("Invalid configuration:", error);
    process.exit(1);
  }
}

export const SERVER_CONFIG = validateConfig();

// CORS configuration
export const CORS_OPTIONS: CorsOptions = {
  origin: SERVER_CONFIG.CORS_ORIGIN,
  methods: ["GET", "POST"],
  credentials: true,
};
