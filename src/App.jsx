import 'styles/App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage.jsx';
import AboutPage from 'pages/AboutPage.jsx';
import ProjectsPage from 'pages/ProjectsPage.jsx';
import NotFound from 'pages/NotFound.jsx';
import { CSSTransition } from 'react-transition-group';

const routes = [
	{ path: '/', name: 'Home', Component: HomePage },
	{ path: '/about', name: 'About', Component: AboutPage },
	{ path: '/projects', name: 'Projects', Component: ProjectsPage },
	{ path: '*', name: 'NotFound', Component: NotFound, status: 404 },
];

const App = () => {
	return (
		<Router>
			<Navbar routes={routes} />
			<Switch>
				<div className="container">
					{routes.map(({ path, name, Component, status }) => (
						<Route key={path} exact path={path} status={status || 200}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={250}
								classNames="page"
								unmountOnExit
							>
								<div className={`${name} page`}>
									<Component />
								</div>
							</CSSTransition>
						)}
						</Route>
					))}
					{/* <Route path="*" status={404}>
						<NotFound />
					</Route> */}
				</div>
			</Switch>
		</Router>
	);
};

export default App;
