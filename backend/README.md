# Portfolio Chat Backend

This is the backend server for the portfolio chat feature, built with Express.js and Socket.IO.

## Features

- Real-time chat functionality using Socket.IO
- OpenAI integration for AI-powered responses
- Express.js REST API endpoints
- Environment-based configuration
- CORS support for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
FRONTEND_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key_here
```

3. Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Running the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Endpoints

- `GET /health` - Health check endpoint

## WebSocket Events

- `connection` - Client connects to the server
- `disconnect` - Client disconnects from the server
- `chat message` - Handle incoming chat messages
- `ai response` - Send AI-generated responses to the client

## Environment Variables

- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend application URL for CORS
- `OPENAI_API_KEY` - OpenAI API key for AI chat functionality
