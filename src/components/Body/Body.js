import React from 'react';

// COMPONENTS
import Jumbotron from './Jumbotron/jumbotron';
import Aboutme from './Aboutme/aboutme';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Body = ({ listProjects, listSkills }) => {
    return (
        <div>
            <Jumbotron />
            <Aboutme />
            <Projects listProjects={listProjects} />
            <Skills listSkills={listSkills} />
        </div>
    );
};

export default Body;
