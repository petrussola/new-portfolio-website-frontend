import React from 'react';

// STYLE
import styled from 'styled-components';

// COMPONENTS
import SkillArea from './SkillArea';
import SkillDescription from './SkillDescription';

// MEDIA
import backgroundImage from '../media/spikes.png';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${backgroundImage});
    height: 95vh;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    box-shadow: 0.2rem 0.2rem 0.5rem gray;
    .detailsSkills {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

const Skills = ({ listSkills }) => {
    return (
        <StyledSection>
            <h3>Skills</h3>
            <section className="detailsSkills">
                <SkillArea listSkills={listSkills} />
                <SkillDescription />
            </section>
        </StyledSection>
    );
};

export default Skills;
