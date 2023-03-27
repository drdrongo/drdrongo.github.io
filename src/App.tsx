import 'styles/App.scss';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from 'components/Navbar';
import AboutPage from 'pages/AboutPage';
import ProjectsPage from 'pages/ProjectsPage';
import NotFoundPage from 'pages/NotFoundPage';
import ThemeProvider, { useThemeContext } from 'providers/ThemeProvider';
import Routers, { IRouters } from 'router/Routes';
import { ReactNode, Suspense } from 'react';
import Snake from 'projects/Snake';
import MessageBoard from 'projects/MessageBoard';
import DrumKit from 'projects/DrumKit';
import HomePage from 'pages/HomePage';

const Layout = () => {
  const { themeClass } = useThemeContext();

  return (
    <div className={`container ${themeClass}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const App = () => {
  const routesLoad = (Routers: IRouters[]): any => {
    return Routers.map(({ path, Component, children }: any) => {
      if (children) {
        return routesLoad(children);
      } else {
        return <Route key={path} path={path} element={<Component />} />;
      }
    });
  };

  return (
    <ThemeProvider>
      <Router>
        <Navbar routes={Routers} />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='projects' element={<ProjectsPage />}>
              <Route path='snake' element={<Snake />} />
              <Route path='messageboard' element={<MessageBoard />} />
              <Route path='drumkit' element={<DrumKit />} />
            </Route>
            <Route path='*' element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
