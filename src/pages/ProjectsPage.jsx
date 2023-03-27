import 'styles/pages/ProjectsPage.scss';
import { useMemo } from 'react';
import { NavLink, Outlet, useOutlet } from 'react-router-dom';

const ProjectsPage = () => {
  const outlet = useOutlet()

  const projects = useMemo(
    () => [
      { title: 'Drum Machine', name: 'drumkit' },
      { title: 'Message Board', name: 'messageboard' },
      { title: 'Snake', name: 'snake' },
    ],
    []
  );

  const projectsList = useMemo(
    () =>
      projects.map(({ title, name }) => {
        return (
          <NavLink
            activeClassName='selected'
            to={name}
            className='project-selector-button'
          >
            {title}
          </NavLink>
        );
      }),
    [projects]
  );

  return (
    <div className='content Projects content'>
      <h1 className='header-text'>Projects</h1>
      <div className='projects-list'>{projectsList}</div>
      <div className='current-project'>
        {outlet || <div style={{ margin: 'auto' }}>Select a project to get started!</div>}
      </div>
    </div>
  );
};

export default ProjectsPage;
