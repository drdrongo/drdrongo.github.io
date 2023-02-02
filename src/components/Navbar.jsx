import 'styles/components/Navbar.scss';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThemeSwitch = () => {
  const [isLight, setIsLight] = useState(true);

  const switchTheme = () => setIsLight(!isLight);

  return (
    <button onClick={switchTheme} className={`ThemeSwitch ${isLight ? 'light' : 'dark'}`}>
      <div />
    </button>
  );
};

const Navbar = ({ routes }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ThemeSwitch />
      <ul className="navbar__inner">
        {routes.map(({ path, name, status }) => {
          if (status === 404) return null;

          return (
            <li key={path} className={`navbar__item ${path === location.pathname ? 'on' : ''}`}>
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
