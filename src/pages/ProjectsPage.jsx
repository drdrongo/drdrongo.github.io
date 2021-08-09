import 'styles/pages/ProjectsPage.scss';
import React, { useState, useMemo, useCallback } from 'react';
import DrumKit from 'projects/DrumKit';

const ProjectsPage = () => {
    const [currentProject, setCurrentProject] = useState(null);
    const projects = useMemo(() => ([
        { title: 'Drum Machine', Component: DrumKit }
    ]), []);

    const renderCurrentProject = useCallback(() => {
        if (!currentProject) return;

        const { Component } = projects.find(proj => proj.title === currentProject);
        return (
            <Component/>
        )
    }, [currentProject, projects]);

    const projectsList = useMemo(() => projects.map(({ title }) => {
        return (
            <button
                className="project-selector-button"
                key={title}
                onClick={() => setCurrentProject(title)}
            >
                {title}
            </button>
        )
    }), [projects]);

    return (
        <div className="content">
            <h1 className="header-text">Projects</h1>
            {projectsList}
            <div className="current-project">
                {renderCurrentProject()}
            </div>
        </div>
    );
};

export default ProjectsPage;
