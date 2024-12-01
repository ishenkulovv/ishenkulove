import {Block} from "../../../../app/style/global.styled.js";
import ProjectCard from "../../../../widgets/projectCard/projectCard.jsx";
import {Wrapper} from "./works.styled.js";
import {PROJECTS_LIST} from "../../../../app/data/projects.js";

const WorksPreview = () => {
	return (
			<Wrapper>
				{PROJECTS_LIST?.map((project, index) => (
						<ProjectCard
								key={index}
								title={project?.title}
								image={project?.image}
								link={project?.link}
								delay={0.7 + (index / 3.5)}
						/>
				))}
			</Wrapper>
	);
};

export default WorksPreview;
