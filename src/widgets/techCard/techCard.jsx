import {TechIcon, TechIconWrapper, TechName, TechPreset, TechWrapper} from "./techCard.styled.js";

const TechCard = ({icon, name, preset}) => {
	return (
			<TechWrapper>
				<TechIconWrapper>
					<TechIcon src={`/icons/${icon}`} alt={name + " " + preset}/>
				</TechIconWrapper>
				<TechName>{name}</TechName>
				<TechPreset>{preset}</TechPreset>
			</TechWrapper>
	);
};

export default TechCard;