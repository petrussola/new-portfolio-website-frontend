import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// COMPONENTS
import Header from './components/Header/header';
import Body from './components/Body/Body';
import ProjectDetail from './components/Body/Projects/Projects';
import Footer from './components/Footer/footer';

// DATA
import { data, skills } from './data/data';

function App() {
    const [listProjects] = useState(data);
    const [listSkills] = useState(skills);
    return (
        <div className="App">
            <Header />
            <Body listProjects={listProjects} listSkills={listSkills} />
            <Footer />
            {/* routes */}
            <Route path="/projects/:id" component={ProjectDetail} />
        </div>
    );
}

export default App;
