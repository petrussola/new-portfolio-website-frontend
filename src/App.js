import React from 'react';
import './App.css';

// COMPONENTS
import Header from './components/header';
import Jumbotron from './components/jumbotron';
import Body from './components/body';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Jumbotron />
            <Body />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
