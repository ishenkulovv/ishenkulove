import React from 'react';
import {Footer} from "../../widgets/index.js";
import Education from "./ui/education/Education.jsx";
import Experience from "./ui/experience/Experience.jsx";
import Note from "./ui/note/Note.jsx";
import TechStack from "./ui/techStack/TechStack.jsx";

const Resume = () => {
	return (
			<React.Fragment>
				<Note />
				<TechStack />
				<Experience />
				<Education />
				<Footer/>
			</React.Fragment>
	);
};

export default Resume;
