import React from 'react';
import { Link } from 'react-router-dom';

// STYLE
import styled from 'styled-components';

// MEDIA
import backgroundImage from '../../media/spikes.png';

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

const Notfound = ({ location }) => {
    let projectId;
    if (location.state) {
        projectId = location.state.projectId;
    }
    return (
        <div>
            <StyledSection>
                <div className="img-container">
                    <img
                        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt="404 not found"
                    />
                </div>
                <div className="project-info">
                    <h3 className="section-title">
                        {projectId
                            ? `Ain&apos;t project ${projectId} in this website!`
                            : 'Page not found'}
                    </h3>
                    {/* <h4>{project.description}</h4> */}
                </div>
                <Link
                    to={projectId ? '/#projects-section' : '/'}
                    className="back-projects"
                >
                    <h4>
                        &#8592;{' '}
                        {projectId
                            ? 'Back to all projects'
                            : 'Back to home page'}
                    </h4>
                </Link>
            </StyledSection>
        </div>
    );
};

export default Notfound;
