import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/cv", label: "CV" },
  ];

  return (
    <nav
      style={{
        background: "#0f172a",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#8b5cf6",
              margin: 0,
            }}
          >
            Shafii
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: location.pathname === link.path ? "#fff" : "#94a3b8",
                textDecoration: "none",
                padding: "8px 16px",
                background:
                  location.pathname === link.path ? "#1e293b" : "transparent",
                borderRadius: "4px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button - keeping this simple */}
        <div
          style={{
            display: "none",
          }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#8b5cf6",
              cursor: "pointer",
            }}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
