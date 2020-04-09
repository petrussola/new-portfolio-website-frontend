import React from 'react';

// STYLE
import styled from 'styled-components';

// COMPONENTS
import SkillUnit from './SkillUnit';

// MEDIA
import react from '../../../media/icons/react.svg';
import branch from '../../../media/icons/code-branch.svg';
import node from '../../../media/icons/node-js.svg';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem;
    .skill-section {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
    }
    .skill-area-title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .icon-wrapper {
            height: 2rem;
            img {
                height: 100%;
                width: auto;
            }
        }
    }
`;

const SkillCard = ({ area, skills }) => {
    return (
        <StyledDiv>
            <div className="skill-area-title">
                <div className="icon-wrapper">
                    <img
                        src={
                            area === 'Frontend'
                                ? react
                                : area === 'Backend'
                                ? node
                                : branch
                        }
                        alt="logo-skill-area"
                    />
                </div>
                <h3>{area}</h3>
            </div>
            <div className="skill-section">
                {skills.map((skill) => {
                    return <SkillUnit skill={skill} key={skill} />;
                })}
            </div>
        </StyledDiv>
    );
};

export default SkillCard;
