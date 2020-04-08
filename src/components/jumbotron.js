import React from 'react';

// ICONS
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';

// STYLES
import styled from 'styled-components';

// MEDIA
import backgroundImage from '../media/spikes.png';

const StyledDiv = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    section {
        background-image: url(${backgroundImage});
        width: 95%;
        height: 90%;
        border-radius: 10px;
        box-shadow: 0.2rem 0.2rem 0.5rem gray;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        nav {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 50%;
        }
        span {
            color: #3f51b5;
            font-weight: bold;
        }
    }
`;

const jumbotron = () => {
    return (
        <StyledDiv>
            <section>
                <nav>
                    <a href="mailto:pere.solaclaver@gmail.com">
                        <EmailIcon style={{ fontSize: 80 }} color="primary" />
                    </a>
                    <a
                        href="https://github.com/petrussola/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <GitHubIcon color="primary" style={{ fontSize: 80 }} />
                    </a>
                    <a
                        href="https://github.com/petrussola/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <LinkedInIcon
                            color="primary"
                            style={{ fontSize: 80 }}
                        />
                    </a>
                    <a
                        href="https://medium.com/@pere.solaclaver"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <AssignmentOutlinedIcon
                            color="primary"
                            style={{ fontSize: 80 }}
                        />
                    </a>
                    <a
                        href="https://twitter.com/petrussola"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <TwitterIcon color="primary" style={{ fontSize: 80 }} />
                    </a>
                </nav>
                <h1>
                    Hello, I am <span>Pere</span>
                </h1>
                <h3>I am a Software Engineer</h3>
            </section>
        </StyledDiv>
    );
};

export default jumbotron;
