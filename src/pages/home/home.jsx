import React from 'react';
import Persona from "./ui/persona/persona.jsx";
import {Footer} from "../../widgets/index.js";
import WorksPreview from "./ui/works/works.jsx";

const Home = () => {
	return (
			<React.Fragment>
				<Persona/>
				<WorksPreview />
				<Footer delay={1} />
			</React.Fragment>
	);
};

export default Home;
