import React from 'react';
import { Link } from 'react-router-dom';

// STYLE
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #3f51b5;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 2.5%;
    @media (max-width: 800px) {
        justify-content: center;
        height: 5vh;
    }
    h3 {
        color: white;
    }
`;

const header = () => {
    return (
        <Link to="/">
            <StyledHeader>
                <h3>{`<Pere />`}</h3>
            </StyledHeader>
        </Link>
    );
};

export default header;
