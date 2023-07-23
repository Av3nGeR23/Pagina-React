import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">Quienes somos</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
          <li><Link to="/armadopc">ARMADO PC</Link></li>
          <li><Link to="/Game">GAME</Link></li>
          <li><Link to="/BuscadorPokemon">BuscadorPokemon</Link></li>
        </ul>
        <div className="dark-mode-toggle">
          <input
            type="checkbox"
            id="dark-mode-checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="dark-mode-checkbox"></label>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
