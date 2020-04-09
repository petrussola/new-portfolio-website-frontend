import React from 'react';

// STYLE
import styled from 'styled-components';

// components
import SkillCard from './SkillCard';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    padding: 3rem;
`;

const SkillArea = ({ listSkills }) => {
    const skillArea = Object.keys(listSkills);
    return (
        <StyledSection className="test">
            {skillArea.map((area) => {
                return <SkillCard area={area} skills={listSkills[area]} />;
            })}
        </StyledSection>
    );
};

export default SkillArea;
