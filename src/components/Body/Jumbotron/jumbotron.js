import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// ICONS
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// STYLES
import styled, { keyframes } from 'styled-components';

// MEDIA
import backgroundImage from '../../../media/spikes.png';

const typing = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

const blinkCaret = keyframes`
    from,
    to {
        border-color: transparent;
    }
    50% {
        border-color: #3F51B5;
    }
`;

const StyledDiv = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    @media (max-width: 800px) {
        height: 95vh;
    }
    section {
        background-image: url(${backgroundImage});
        width: 95%;
        height: 90%;
        border-radius: 5px;
        box-shadow: 0.2rem 0.2rem 0.5rem gray;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width: 800px) {
            width: 95%;
        }
        nav {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 50%;
            @media (max-width: 800px) {
                width: 90%;
            }
            a {
                transition: transform 0.5s;
            }
            a:hover {
                transform: scale(1.1);
                * {
                    color: black;
                }
            }
        }
        h1 {
            @media (max-width: 800px) {
            }
        }
        span {
            color: #3f51b5;
            font-weight: bold;
        }
        .typewriter h3 {
            /* background-color: red; */
            overflow: hidden;
            border-right: 0.1em solid #3f51b5;
            white-space: nowrap;
            margin: 0 auto;
            animation: ${typing} 3.5s steps(30, end),
                ${blinkCaret} 0.5s step-end infinite;
        }
    }
`;

const Jumbotron = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <StyledDiv>
            <section>
                <nav>
                    <a href="mailto:pere.solaclaver@gmail.com">
                        <EmailIcon
                            style={{ fontSize: `${matches ? 80 : 40}` }}
                            color="primary"
                        />
                    </a>
                    <a
                        href="https://github.com/petrussola/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <GitHubIcon
                            color="primary"
                            style={{ fontSize: `${matches ? 80 : 40}` }}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/peresola/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <LinkedInIcon
                            color="primary"
                            style={{ fontSize: `${matches ? 80 : 40}` }}
                        />
                    </a>
                    <a
                        href="https://medium.com/@pere.solaclaver"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <AssignmentOutlinedIcon
                            color="primary"
                            style={{ fontSize: `${matches ? 80 : 40}` }}
                        />
                    </a>
                    <a
                        href="https://twitter.com/petrussola"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <TwitterIcon
                            color="primary"
                            style={{ fontSize: `${matches ? 80 : 40}` }}
                        />
                    </a>
                </nav>
                <h1>
                    Hello, I am <span>Pere</span>
                </h1>
                <div className="typewriter">
                    <h3>I am a Software Engineer</h3>
                </div>
                <a href="#about">
                    <h4>
                        <ExpandMoreIcon
                            color="primary"
                            style={{ fontSize: `${matches ? 80 : 40}` }}
                        />
                    </h4>
                </a>
            </section>
        </StyledDiv>
    );
};

export default Jumbotron;
