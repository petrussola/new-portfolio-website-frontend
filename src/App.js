import React from 'react';
import './App.css';

// COMPONENTS
import Header from './components/header';
import Body from './components/body';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Body />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
