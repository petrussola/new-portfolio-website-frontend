import React from 'react';

// STYLE
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    background-color: red;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0.1rem 0.1rem 1rem gray;
    &:hover {
        transform: scale(1.02);
    }
    section {
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
        }
    }
`;

const ProjectCard = ({ item }) => {
    return (
        <StyledSection>
            <section>
                <img src={item.src} alt={item.name} />
            </section>
            <section className="name-card">
                <h3>{item.name}</h3>
            </section>
        </StyledSection>
    );
};

export default ProjectCard;
