import {TechIcon, TechName, TechPreset, TechWrapper} from "./techCard.styled.js";

const TechCard = ({icon, name, preset}) => {
	return (
			<TechWrapper>
				<TechIcon src={`/icons/${icon}`} alt={name + " " + preset}/>
				<TechName>{name}</TechName>
				<TechPreset>{preset}</TechPreset>
			</TechWrapper>
	);
};

export default TechCard;
