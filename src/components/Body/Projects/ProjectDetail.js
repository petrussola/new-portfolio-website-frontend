import React from 'react';
import styled from 'styled-components';

// MEDIA
import backgroundImage from '../../../media/spikes.png';

const StyledSection = styled.section`
    background-image: url(${backgroundImage});
    height: 95vh;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    box-shadow: 0.2rem 0.2rem 0.5rem gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ProjectDetail = () => {
    return (
        <div>
            <StyledSection>hello</StyledSection>
        </div>
    );
};

export default ProjectDetail;
