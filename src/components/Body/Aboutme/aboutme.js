import React from 'react';

// STYLES
import styled from 'styled-components';

// MEDIA
import pereImage from '../../../media/pere.jpg';

const StyledSection = styled.section`
    display: flex;
    /* width: 100%; */
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    /* height: 150vh; */
    /* padding: 50px 5vh; */
    /* background: yellow; */
    div {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        @media (max-width: 600px) {
            width: 100%;
            align-items: center;
            /* height: 480px; */
            &.about-me-text {
                /* background: green; */
                order: 2;
                padding-top: 1rem;
            }
        }
        &.about-me-photo {
            /* background-color: red; */
            align-items: center;
            @media (max-width: 600px) {
                order: 1;
            }
            img {
                object-fit: cover;
                height: 300px;
                border-radius: 5px;
                box-shadow: 0.2rem 0.2rem 0.5rem gray;
            }
        }
    }
`;

const body = () => {
    return (
        <StyledSection id="about">
            <div className="about-me-text">
                <h3 className="section-title">About me</h3>
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
            </div>
            <div className="about-me-photo">
                <img src={pereImage} alt="Headshot of Pere" />
            </div>
        </StyledSection>
    );
};

export default body;
