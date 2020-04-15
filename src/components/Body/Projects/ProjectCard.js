import React from 'react';
import { Link } from 'react-router-dom';

// STYLE
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 350px;
    height: 350px;
    padding: 0;
    border-radius: 5px;
    box-shadow: 0.1rem 0.1rem 1rem gray;
    transition: transform 0.5s;
    @media (max-width: 600px) {
        width: 90vw;
    }
    @media (max-width: 1200px) {
        width: 300px;
        height: 300px;
    }
    &:hover {
        transform: scale(1.02);
    }
    section {
        margin-top: 0;
    }
    .project-photo {
        width: 100%;
        height: 80%;
        img {
            height: 100%;
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            object-fit: cover;
            object-position: left;
        }
    }
    .name-card {
        height: 20%;
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
            color: #3f51b5;
        }
    }
`;

const ProjectCard = ({ item }) => {
    return (
        <Link to={`/projects/${item.id}`}>
            <StyledSection>
                <div className="project-photo">
                    <img src={item.src} alt={item.name} />
                </div>
                <div className="name-card">
                    <h4>{item.name}</h4>
                </div>
            </StyledSection>
        </Link>
    );
};

export default ProjectCard;
