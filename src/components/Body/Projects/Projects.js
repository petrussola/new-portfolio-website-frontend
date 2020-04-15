import React from 'react';

// STYLE
import styled from 'styled-components';

// COMPONENTS
import ProjectCard from './ProjectCard';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 2rem;
    div {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    }
`;

const Projects = ({ listProjects }) => {
    return (
        <StyledSection id="projects">
            <h3 className="section-title">Projects</h3>
            <div className="sub-section">
                {listProjects.map((item) => {
                    return <ProjectCard item={item} key={item.id} />;
                })}
            </div>
        </StyledSection>
    );
};

export default Projects;
