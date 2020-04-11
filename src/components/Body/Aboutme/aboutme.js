import React from 'react';

// STYLES
import styled from 'styled-components';

// MEDIA
import pereImage from '../../../media/pere.jpg';

const StyledSection = styled.section`
    display: flex;
    /* width: 100%; */
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 65vh;
    /* padding: 50px 5vh; */
    /* background: yellow; */
    div {
        /* background-color: red; */
        height: 100%;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        &.about-me-text {
            /* background: green; */
        }
        &.about-me-photo {
            align-items: center;
            img {
                object-fit: cover;
                height: 75%;
                border-radius: 5px;
                box-shadow: 0.2rem 0.2rem 0.5rem gray;
            }
        }
    }
`;

const body = () => {
    return (
        <StyledSection>
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
