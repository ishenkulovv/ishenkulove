import {ImageStyled, LinkStyled, TitleStyled, WrapperStyled} from "./projectCard.styled.js";
import LinkArrowIcon from "./icons/linkArrow.jsx";

const ProjectCard = ({link, title, image, duration, delay}) => {
	return (
			<WrapperStyled to={`/works/${link}`} $duration={duration} $delay={delay}>
				<ImageStyled src={`/images/projects/${image}.png?v=1`} alt={"Winecode"} />
				<TitleStyled>{title}</TitleStyled>
				<LinkStyled>
					<LinkArrowIcon />
				</LinkStyled>
			</WrapperStyled>
	);
};

export default ProjectCard;
