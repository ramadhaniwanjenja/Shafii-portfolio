import React from 'react'
import ChatInterface from './chatbot/ChatInterface'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shafii's Portfolio</h1>
        <p>Welcome to my portfolio! Feel free to chat with me.</p>
      </header>
      <main>
        <ChatInterface />
      </main>
    </div>
  )
}

export default App 