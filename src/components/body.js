import React from 'react';

// COMPONENTS
import Header from './header/header';
import AboutMe from './aboutme/aboutme';
import Projects from './projects/projects';
import Skills from './skills/skills';
import Footer from './footer/footer';

const body = () => {
	return (
		<div>
			<Header />
			<AboutMe />
			<Projects />
			<Skills />
			<Footer />
		</div>
	);
};

export default body;
