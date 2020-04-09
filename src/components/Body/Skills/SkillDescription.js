import React from 'react';

// STYLE
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 50%;
    padding: 3rem;
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
                industry-standard tools, including git-flow, Test Driven
                Development, Continous Integration, linting (ESLint, Prettier)
                and Package Management (NPM and Pipenv).
                <br />
                <br />
                Although I have a wide range of experience, the technology I
                prefer and/or am most familiar with includes React, Redux, Node,
                Postgres, JavaScript ES6, Sass/CSS/PostCSS, HTML.
            </h4>
        </StyledSection>
    );
};

export default SkillDescription;
