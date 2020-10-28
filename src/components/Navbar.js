import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="navbar-brand text-info text-lg brand-text">
          <h1>Tasty Menu</h1>
        </Link>
        <ul className="nav-links align-items-center">
          <li>
            <Link to="/" className="text-info">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-info">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
