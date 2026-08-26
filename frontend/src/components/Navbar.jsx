import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Brain,
  Code2,
  Binary,
  Bot,
  PenTool
} from 'lucide-react';

const icons = {
  Brain,
  Code2,
  Binary,
  Bot,
  PenTool
};

export default function Navbar({ wings }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

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

          <div
            className="wings-nav"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button className="nav-link">
              Wings <ChevronDown size={15} />
            </button>

            {drop && (
              <div className="mega">
                {wings.map((w) => {
                  const I = icons[w.icon] || Code2;

                  return (
                    <Link
                      key={w.id}
                      to={`/wings#${w.id}`}
                    >
                      <I />

                      <div>
                        <b>{w.name}</b>
                        <small>{w.accent}</small>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <details>
            <summary>Wings</summary>

            {wings.map((w) => (
              <Link
                key={w.id}
                to={`/wings#${w.id}`}
                onClick={() => setOpen(false)}
              >
                {w.name}
              </Link>
            ))}
          </details>

          <NavLink
            to="/resources"
            onClick={() => setOpen(false)}
          >
            Resources
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </div>
      )}
    </header>
  );
}
