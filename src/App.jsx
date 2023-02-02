import 'styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage.jsx';
import AboutPage from 'pages/AboutPage.jsx';
import ProjectsPage from 'pages/ProjectsPage.jsx';
import NotFoundPage from 'pages/NotFoundPage.jsx';
import { CSSTransition } from 'react-transition-group';
import ThemeProvider, { useThemeContext } from 'providers/ThemeProvider';

const routes = [
  { exact: true, path: '/', name: 'Home', Component: HomePage },
  { exact: true, path: '/about', name: 'About', Component: AboutPage },
  { exact: true, path: '/projects', name: 'Projects', Component: ProjectsPage },
];

const AppContent = () => {
  const { themeClass } = useThemeContext();

  return (
    <div className={`container ${themeClass}`}>
      {routes.map(({ path, exact, name, Component, status }) => (
        <Route key={path} exact={exact} path={path} status={status || 200}>
          {({ match }) => (
            <CSSTransition in={match != null} timeout={250} classNames="page" unmountOnExit>
              <div className={`${name} page`}>
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar routes={routes} />
        <Switch>
          <AppContent />
        </Switch>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
