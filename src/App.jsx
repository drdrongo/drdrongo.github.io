import 'styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage.jsx';
import AboutPage from 'pages/AboutPage.jsx';
import ProjectsPage from 'pages/ProjectsPage.jsx';
import NotFoundPage from 'pages/NotFoundPage.jsx';
import { CSSTransition } from 'react-transition-group';

const routes = [
  { exact: true, path: '/', name: 'Home', Component: HomePage },
  { exact: true, path: '/about', name: 'About', Component: AboutPage },
  { exact: true, path: '/projects', name: 'Projects', Component: ProjectsPage },
];

const App = () => {
  return (
    <Router>
      <Navbar routes={routes} />
      <Switch>
        <div className="container">
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
          <Route component={NotFoundPage} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
