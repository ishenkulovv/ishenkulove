import {Block} from "../../../../app/style/global.styled.js";
import {TechStackWrapper, Title} from "../../resume.styled.js";
import TechCard from "../../../../widgets/techCard/techCard.jsx";
import {TECHNOLOGIES_LIST} from "../../../../app/data/technologies.js";

const TechStack = () => {
	return (
			<Block $padding={"36px"} $delay={0.6} $duration={0.5}>
				<Title>Tech Stack</Title>
				<TechStackWrapper>
					{TECHNOLOGIES_LIST?.map((tech, index) => (
						<TechCard key={index} name={tech?.name} icon={tech?.icon} preset={tech?.preset} />
						))}
				</TechStackWrapper>
				
			</Block>
	);
};

export default TechStack;
