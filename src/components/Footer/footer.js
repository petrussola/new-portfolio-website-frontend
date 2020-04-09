import React from 'react';

// ICONS
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';

// STYLE
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #3f51b5;
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 30%;
        a {
            transition: transform 0.5s;
            color: white;
        }
        a:hover {
            transform: scale(1.1);
            * {
                color: black;
            }
        }
    }
    p {
        color: white;
    }
`;

const footer = () => {
    const year = new Date().getFullYear();
    return (
        <StyledFooter>
            <nav>
                <a href="mailto:pere.solaclaver@gmail.com">
                    <EmailIcon style={{ fontSize: 40 }} />
                </a>
                <a
                    href="https://github.com/petrussola/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <GitHubIcon style={{ fontSize: 40 }} />
                </a>
                <a
                    href="https://github.com/petrussola/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <LinkedInIcon style={{ fontSize: 40 }} />
                </a>
                <a
                    href="https://medium.com/@pere.solaclaver"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <AssignmentOutlinedIcon style={{ fontSize: 40 }} />
                </a>
                <a
                    href="https://twitter.com/petrussola"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <TwitterIcon style={{ fontSize: 40 }} />
                </a>
            </nav>
            <p>&copy; {year} - Made with love with React by Pere</p>
        </StyledFooter>
    );
};

export default footer;
