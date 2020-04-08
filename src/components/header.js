import React from 'react';

// STYLE
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #035b96;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    h2 {
        color: white;
    }
`;

const header = () => {
    return (
        <StyledHeader>
            <h2>Pere</h2>
        </StyledHeader>
    );
};

export default header;
