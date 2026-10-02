import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { clearStudentSession, useStudentSession } from "../../utils/studentAuth";
import {
  Menu,
  X,
  Brain,
  Code2,
  Binary,
  Bot,
  PenTool,
} from "lucide-react";

const icons = {
  Brain,
  Code2,
  Binary,
  Bot,
  PenTool,
};

export default function Navbar({ wings }) {
  const [open, setOpen] = useState(false);
  const student = useStudentSession();

  const closeMenus = () => setOpen(false);

  const logout = () => {
    clearStudentSession();
    closeMenus();
  };

  const authLinks = (onNavigate) =>
    student ? (
      <>
        <span className="nav-link nav-student" title={student.email}>
          {student.name?.split(" ")[0] || "Student"}
        </span>
        <button type="button" className="nav-link" onClick={logout}>
          Logout
        </button>
      </>
    ) : (
      <NavLink to="/student/login" onClick={onNavigate}>
        Login
      </NavLink>
    );

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link
          className="brand orbit-brand"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Orbit home"
        >
          <img src="/orbitlogo.png" alt="Orbit" />
          <span className="orbit-brand-name">ORBIT</span>
        </Link>

        <div className="desktop-nav">
          <NavLink to="/">Home</NavLink>

          <Link className="nav-link" to="/wings" onClick={() => setOpen(false)}>
            Wings
          </Link>

          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          {authLinks(() => setOpen(false))}
        </div>

        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={closeMenus}>
            Home
          </NavLink>

          <Link to="/wings" onClick={closeMenus}>
            Wings
          </Link>

          <NavLink to="/resources" onClick={closeMenus}>
            Resources
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenus}>
            Gallery
          </NavLink>

          <NavLink to="/about" onClick={closeMenus}>
            About
          </NavLink>

          {authLinks(closeMenus)}
        </div>
      )}
    </header>
  );
}
