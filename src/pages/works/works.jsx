import React from 'react';
import {Footer} from "../../widgets/index.js";
import {TitleStyled, WorksList} from "./works.styled.js";
import {PROJECTS_LIST} from "../../app/data/projects.js";
import ProjectCard from "../../widgets/projectCard/projectCard.jsx";

const Works = () => {
	return (
			<React.Fragment>
				<TitleStyled>All works</TitleStyled>
				<WorksList>
					{PROJECTS_LIST?.map((project, index) => (
							<ProjectCard
									key={index}
									title={project?.title}
									image={project?.image}
									link={project?.link}
									delay={0.4 + (index / 4)}
							/>
					))}
				</WorksList>
				<Footer delay={1}/>
			</React.Fragment>
	);
};

export default Works;
