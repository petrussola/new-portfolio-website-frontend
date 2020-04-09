import React from 'react';

// STYLE
import styled from 'styled-components';

const StyledSection = styled.section`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    /* margin: 5px; */
    padding: 0;
    /* border-radius: 5px; */
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
        height: 75%;
        background-color: #f5f5f5;
        &.name-card {
            height: 25%;
            background-color: white;
            h3 {
                color: #3f51b5;
            }
        }
        img {
            height: auto;
            width: 100%;
            border-radius: 5px;
        }
    }
`;

const ProjectCard = ({ item }) => {
    return (
        <StyledSection>
            <section className="project-photo">
                <img src={item.src} alt={item.name} />
            </section>
            <section className="name-card">
                <h4>{item.name}</h4>
            </section>
        </StyledSection>
    );
};

export default ProjectCard;
