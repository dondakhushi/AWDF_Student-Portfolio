import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from 'react';

function Navbar({ navLinks }) {
   
  const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark-mode', next);
  };
  return (
    <nav className="tab-bar">
      <ul className="tabs">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link className="Link" to={link.path}>{link.name}</Link>
          </li>
        ))}
        
      </ul>
      <button type="button" className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '☀ light' : '☾ dark'}
      </button>
    </nav>
  );
}

export default Navbar;
