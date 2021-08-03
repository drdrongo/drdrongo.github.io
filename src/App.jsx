import 'styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage.jsx';
import AboutPage from 'pages/AboutPage.jsx';
import { CSSTransition } from 'react-transition-group';

const routes = [
	{ path: '/', name: 'Home', Component: HomePage },
	{ path: '/about', name: 'About', Component: AboutPage },
];

const App = () => {
	return (
		<Router>
			<Navbar routes={routes} />
			<Switch>
				<div className="container">
					{routes.map(({ path, name, Component }) => (
						<Route key={path} exact path={path}>
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
				</div>
			</Switch>
		</Router>
	);
};

export default App;
