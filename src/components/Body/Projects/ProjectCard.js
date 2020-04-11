import React from 'react';
import { Link } from 'react-router-dom';

// STYLE
import styled from 'styled-components';

const StyledSection = styled.section`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 350px;
    height: 350px;
    /* margin: 5px; */
    padding: 0;
    border-radius: 5px;
    box-shadow: 0.1rem 0.1rem 1rem gray;
    transition: transform 0.5s;
    &:hover {
        transform: scale(1.02);
    }
    section {
        margin-top: 0;
    }
    .project-photo {
        background-color: yellow;
        width: 100%;
        height: 80%;
        /* background-color: #f5f5f5; */
        /* background-color: yellow; */
        img {
            height: 100%;
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            object-fit: cover;
            /* display: none; */
        }
    }
    .name-card {
        /* background-color: brown; */
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
