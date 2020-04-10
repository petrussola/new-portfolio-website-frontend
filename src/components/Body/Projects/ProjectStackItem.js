import React from 'react';

// STYLE
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #3f51b5;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
    white-space: nowrap;
    text-align: center;
    color: white;
`;

const ProjectStackItem = ({ item }) => {
    return <StyledDiv>{item}</StyledDiv>;
};

export default ProjectStackItem;
