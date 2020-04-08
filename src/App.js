import React, { useState } from 'react';
import './App.css';

// COMPONENTS
import Header from './components/header';
import Jumbotron from './components/jumbotron';
import Body from './components/aboutme';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';

// DATA
import data from './data/data';

function App() {
    const [listProjects] = useState(data);
    return (
        <div className="App">
            <Header />
            <Jumbotron />
            <Body />
            <Projects listProjects={listProjects} />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
