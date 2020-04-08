import React from 'react';

// STYLES
import styled from 'styled-components';

// MEDIA
import pereImage from '../media/pere.jpg';

const StyledSection = styled.section`
    /* background: green; */
    display: flex;
    flex-direction: flow;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
    padding: 50px 5vh;
    section {
        height: inherit;
        width: 50%;
        height: inherit;
        &.about-me-text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            text-align: left;
        }
        h3 {
            font-weight: bold;
            color: #3f51b5;
        }
        img {
            object-fit: cover;
            height: inherit;
            border-radius: 10px;
            box-shadow: 0.2rem 0.2rem 0.5rem gray;
        }
    }
`;

const body = () => {
    return (
        <StyledSection>
            <section className="about-me-text">
                <h3>About Me</h3>
                <p>
                    Lifelong learner, Growth Mindset-er and currently Senior
                    Account Manager and Sales for our top customers in Spain and
                    France at Stripe. Previously at Google and Twitter. I have
                    had a keen interest in software development for years and I
                    recently fulfilled my long time dream to enroll a technical
                    school and train to become a Software Engineer. I recently
                    graduated as a Full Stack Developer from Lambda School. I
                    have vast experience working with Javascript, Python, React,
                    Nodejs, Express, SQL based and non-SQL based databases
                    (PostgreSQL, MongoDB), Git, Continuous Integration and
                    building RESTful APIs.
                    <br />
                    <br />
                    When not in front of my computer I love to watch
                    documentaries and baking for my family on the weekends!
                </p>
            </section>
            <section>
                <img src={pereImage} alt="Headshot of Pere" />
            </section>
        </StyledSection>
    );
};

export default body;
