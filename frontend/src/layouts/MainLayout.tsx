import React from "react";
import { Link } from "react-router-dom";
import ChatInterface from "../components/chatbot/ChatInterface";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const headerStyle = {
    backgroundColor: "#0F172A",
    borderBottom: "1px solid #1E293B",
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  const navStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#D1D5DB",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    transition: "all 0.2s",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#4C1D95",
    backgroundColor: "#1E293B",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold" as const,
    color: "#4C1D95",
    textDecoration: "none",
  };

  const mainStyle = {
    minHeight: "100vh",
    backgroundColor: "#0F172A",
    backgroundImage: "linear-gradient(to bottom right, #0F172A, #1E293B)",
    paddingTop: "80px",
    paddingBottom: "40px",
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/cv", label: "CV" },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom right, #0F172A, #1E293B)",
        minHeight: "100vh",
      }}
    >
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={logoStyle}>
            Shafii
          </Link>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={
                  window.location.pathname === link.path
                    ? activeLinkStyle
                    : linkStyle
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main style={mainStyle}>{children}</main>

      <ChatInterface />
    </div>
  );
};

export default MainLayout;
