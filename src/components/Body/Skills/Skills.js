import React from 'react';

// STYLE
import styled from 'styled-components';

// COMPONENTS
import SkillArea from './SkillArea';
import SkillDescription from './SkillDescription';

// MEDIA
import backgroundImage from '../../../media/spikes.png';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-image: url(${backgroundImage});
    /* height: 95vh; */
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0.2rem 0.2rem 0.5rem gray;
    @media (max-width: 600px) {
        padding-bottom: 2rem;
    }
    .section-title {
        padding-top: 2rem;
    }
    .detailsSkills {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 800px) {
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

const Skills = ({ listSkills }) => {
    return (
        <StyledSection>
            <h3 className="section-title">Skills</h3>
            <div className="detailsSkills">
                <SkillArea listSkills={listSkills} />
                <SkillDescription />
            </div>
        </StyledSection>
    );
};

export default Skills;
