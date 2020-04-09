import React from 'react';

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
    h3 {
        color: white;
    }
`;

const header = () => {
    return (
        <StyledHeader>
            <h3>{`<Pere />`}</h3>
        </StyledHeader>
    );
};

export default header;
