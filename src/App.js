import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// COMPONENTS
import Header from './components/Header/header';
import Body from './components/Body/Body';
import ProjectDetail from './components/Body/Projects/ProjectDetail';
import Footer from './components/Footer/footer';

// DATA
import { data, skills } from './data/data';

function App() {
    const [listProjects] = useState(data);
    const [listSkills] = useState(skills);
    return (
        <div className="App">
            <Router>
                <Header />
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        return (
                            <Body
                                location={props.location}
                                history={props.history}
                                match={props.match}
                                listProjects={listProjects}
                                listSkills={listSkills}
                            />
                        );
                    }}
                />
                <Route
                    exact
                    path="/projects/:id"
                    render={(props) => {
                        return (
                            <ProjectDetail
                                location={props.location}
                                history={props.history}
                                match={props.match}
                                listProjects={listProjects}
                            />
                        );
                    }}
                />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
