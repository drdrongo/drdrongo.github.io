import 'styles/components/Navbar.scss';
import 'styles/components/ThemeSwitch.scss';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeContext } from 'providers/ThemeProvider';

const ThemeSwitch = ({ style }) => {
  const { isLight, switchTheme } = useThemeContext();

  return (
    <button onClick={switchTheme} className={`ThemeSwitch ${isLight ? 'light' : 'dark'}`}>
      <div className="sun-moon">
        <div className="cutout" />
      </div>
    </button>
  );
};

const Navbar = ({ routes }) => {
  const { themeClass } = useThemeContext();

  const location = useLocation();

  return (
    <nav className={`navbar ${themeClass}`}>
      <ul className="navbar__inner">
        <ThemeSwitch />

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
