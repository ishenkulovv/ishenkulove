import {Block} from "../../../../app/style/global.styled.js";
import {TechStackWrapper, Title} from "../../resume.styled.js";
import TechCard from "../../../../widgets/techCard/techCard.jsx";
import {TECHNOLOGIES_LIST} from "../../../../app/data/technologies.js";

const TechStack = () => {
	return (
			<Block $padding={"36px"} $delay={0.2} $duration={0.5}>
				<Title $delay={0.3} $duration={0.5}>Tech Stack</Title>
				<TechStackWrapper>
					{TECHNOLOGIES_LIST?.map((tech, index) => (
						<TechCard
								delay={0.4 + (index / 4.5)}
								duration={0.4}
								key={index}
								name={tech?.name}
								icon={tech?.icon}
								preset={tech?.preset}
						/>
						))}
				</TechStackWrapper>
				
			</Block>
	);
};

export default TechStack;
