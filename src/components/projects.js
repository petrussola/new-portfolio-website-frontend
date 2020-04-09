import React from 'react';

// STYLE
import styled from 'styled-components';

// COMPONENTS
import ProjectCard from './ProjectCard';

// MEDIA
import backgroundImage from '../media/spikes.png';

const StyledSection = styled.section`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 95vh;
    /* margin: 0 auto; */
    /* width: 95%; */
    /* background-image: url(${backgroundImage}); */
    /* border-radius: 10px;
    box-shadow: 0.2rem 0.2rem 0.5rem gray; */
    section {
        /* background-color: brown; */
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        /* margin-top: 0; */
    }
`;

const Projects = ({ listProjects }) => {
    return (
        <StyledSection>
            <h3>Projects</h3>
            <section className="sub-section">
                {listProjects.map((item) => {
                    return <ProjectCard item={item} />;
                })}
            </section>
        </StyledSection>
    );
};

export default Projects;
