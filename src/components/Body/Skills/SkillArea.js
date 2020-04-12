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
    padding: 0 3rem;
    margin: 0;
    /* background-color: yellow; */
    @media (max-width: 800px) {
        width: 100%;
        padding: 0;
        order: 2;
    }
`;

const SkillArea = ({ listSkills }) => {
    const skillArea = Object.keys(listSkills);
    return (
        <StyledSection className="test">
            {skillArea.map((area) => {
                return (
                    <SkillCard
                        area={area}
                        skills={listSkills[area]}
                        key={listSkills[area]}
                    />
                );
            })}
        </StyledSection>
    );
};

export default SkillArea;
