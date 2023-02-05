import 'styles/pages/ProjectsPage.scss';
import React, { useState, useMemo, useCallback } from 'react';
import DrumKit from 'projects/DrumKit';
import MessageBoard from 'projects/MessageBoard';
import Snake from 'projects/Snake';

const ProjectsPage = () => {
  const projects = useMemo(
    () => [
      { title: 'Drum Machine', Component: DrumKit },
      { title: 'Message Board', Component: MessageBoard },
      { title: 'Snake', Component: Snake },
    ],
    []
  );

  const [currentProject, setCurrentProject] = useState('Snake');

  const renderCurrentProject = useCallback(() => {
    if (!currentProject) return;

    const { Component } = projects.find(proj => proj.title === currentProject);
    return <Component />;
  }, [currentProject, projects]);

  const projectsList = useMemo(
    () =>
      projects.map(({ title }) => {
        return (
          <button
            className={`project-selector-button ${currentProject === title ? 'selected' : ''}`}
            key={title}
            onClick={() => setCurrentProject(title)}
          >
            {title}
          </button>
        );
      }),
    [projects, currentProject]
  );

  return (
    <div className="content">
      <h1 className="header-text">Projects</h1>
      <div className="projects-list">{projectsList}</div>
      <div className="current-project">{renderCurrentProject()}</div>
    </div>
  );
};

export default ProjectsPage;
