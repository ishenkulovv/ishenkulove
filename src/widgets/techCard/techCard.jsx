import {TechIcon, TechIconWrapper, TechName, TechPreset, TechWrapper} from "./techCard.styled.js";

const TechCard = ({icon, name, preset, duration, delay}) => {
	return (
			<TechWrapper $duration={duration} $delay={delay}>
				<TechIconWrapper>
					<TechIcon src={`/icons/${icon}`} alt={name + " " + preset}/>
				</TechIconWrapper>
				<TechName>{name}</TechName>
				<TechPreset>{preset}</TechPreset>
			</TechWrapper>
	);
};

export default TechCard;
