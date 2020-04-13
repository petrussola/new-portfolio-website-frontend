import React from 'react';

// STYLE
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 50%;
    padding: 3rem;
    @media (max-width: 800px) {
        width: 100%;
        padding: 0;
        order: 1;
    }
    h4 {
        text-align: left;
    }
`;

const SkillDescription = () => {
    return (
        <StyledSection>
            <h4>
                I am a Full-Stack Software Engineer with a passion for web
                technologies. I write robust, clean, re-usable and maintainable
                code.
                <br />
                <br />
                This also means I strive to follow best practices and use
                industry-standard tools, including git-flow, Testing Best
                Practices, Continous Integration, Linting (ESLint, Prettier) and
                Package Management (NPM, Pipenv).
            </h4>
        </StyledSection>
    );
};

export default SkillDescription;
