<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CVPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
>>>>>>> b21f2a90b765a4a59be96053cc30eab67046896b
