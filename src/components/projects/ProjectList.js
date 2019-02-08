import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    return (
        <div>
            <div className="project-list section">
                {projects && projects.map(project => {
                    return(
                        <ProjectSummary project={project} key={project.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectList;