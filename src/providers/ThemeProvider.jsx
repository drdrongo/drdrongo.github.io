const { createContext, useState, useContext, useEffect, useMemo } = require('react');

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const storageKey = 'color-theme';

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(
    localStorage.getItem(storageKey) ? localStorage.getItem(storageKey) === 'light' : true
  );

  const themeClass = useMemo(() => `app-theme-${isLight ? 'light' : 'dark'}`, [isLight]);

  useEffect(() => {
    localStorage.setItem(storageKey, isLight ? 'light' : 'dark');
  }, [isLight]);

  const switchTheme = () => setIsLight(!isLight);

  return <ThemeContext.Provider value={{ isLight, themeClass, switchTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
