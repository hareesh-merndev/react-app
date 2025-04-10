import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (isHovered) => ({
    color: isHovered ? "red" : "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
  });

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "20px",
          padding: "10px",
          position: "fixed",
          top: "0",
          right: "0",
          width: "100%",
          zIndex: "1000",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <div>
          <Link
            to="/"
            style={linkStyle(hoveredLink === "home")}
            onMouseEnter={() => setHoveredLink("home")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/todo"
            style={linkStyle(hoveredLink === "todo")}
            onMouseEnter={() => setHoveredLink("todo")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Todo
          </Link>
        </div>
        <div>
          <Link
            to="/profilecard"
            style={linkStyle(hoveredLink === "profilecard")}
            onMouseEnter={() => setHoveredLink("profilecard")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Profile Card
          </Link>
        </div>
        <div>
          <Link
            to="/gridview"
            style={linkStyle(hoveredLink === "gridview")}
            onMouseEnter={() => setHoveredLink("gridview")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Grid App
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;