import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatInterface from './chatbot/ChatInterface'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Shafii's Portfolio</h1>
          <p>Welcome to my portfolio! Feel free to chat with me.</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ChatInterface />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
