import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ICONS
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

// COMPONENTS
import ProjectStackItem from './ProjectStackItem';

// MEDIA
import backgroundImage from '../../../media/spikes.png';

const StyledSection = styled.section`
    background-image: url(${backgroundImage});
    /* height: 95vh; */
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    box-shadow: 0.2rem 0.2rem 0.5rem gray;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 5vh;
    .img-container {
        width: 50vw;
        border-radius: 5px;
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 0.2rem 0.2rem 0.5rem gray;
        img {
            width: 90%;
            /* height: auto; */
        }
    }
    .project-info {
        padding-top: 1rem;
    }
    nav {
        width: 20vw;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding-top: 1rem;
        a {
            transition: transform 0.5s;
            &:hover {
                transform: scale(1.1);
                * {
                    color: black;
                }
            }
        }
    }
    .stack-section {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        padding-top: 1rem;
    }
    .back-projects {
        padding: 1rem 0;
    }
`;

const ProjectDetail = ({ listProjects, match }) => {
    const { id } = match.params;
    const project = listProjects.find((item) => {
        return item.id === parseInt(id, 10);
    });
    return (
        <div>
            <StyledSection>
                <div className="img-container">
                    <img src={project.srcMac} alt={project.description} />
                </div>
                <div className="project-info">
                    <h3 className="section-title">{project.name}</h3>
                    <h4>{project.description}</h4>
                </div>
                <div className="stack-section">
                    {project.stack.map((item) => {
                        return <ProjectStackItem item={item} key={item} />;
                    })}
                </div>
                <nav>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <GitHubIcon color="primary" style={{ fontSize: 60 }} />
                    </a>
                    <a
                        href="https://art-funder.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <WebIcon color="primary" style={{ fontSize: 60 }} />
                    </a>
                </nav>
                <Link to="/#projects-section" className="back-projects">
                    <h4>&#8592; Back to all projects</h4>
                </Link>
            </StyledSection>
        </div>
    );
};

export default ProjectDetail;
