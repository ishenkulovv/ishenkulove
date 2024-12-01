import {Block} from "../../../../app/style/global.styled.js";
import {
	Details,
	Experience,
	ExperienceText,
	ExperienceYears, HomeIconStyled, HomeMiniStyled,
	Images,
	Info,
	Laptop, PlusIconStyled, Search, SearchText,
	Sky, SubTitle, Title,
	Wrapper
} from "./persona.styled.js";
import PlusIcon from "./icons/plusIcon.jsx";
import HomeIcon from "./icons/homeIcon.jsx";
import {useState} from "react";

const Persona = () => {
	const [clickedHome, setClickedHome] = useState(false)
	const [searchText, setSearchText] = useState(true)
	return (
			<Block $delay={0.5} $duration={0.5}>
				<Wrapper>
					<Details>
						<Info>
							<Title $delay={1} $duration={0.4}>
								Hi, I'm Adil
							</Title>
							<SubTitle $delay={1.2} $duration={0.4}>
								A Front-end Developer, apparently.
							</SubTitle>
						</Info>
					</Details>
					<Images>
						<Laptop
								$delay={0.7} $scale={0.7}
								src={"./images/laptop.avif?v=1"}
								alt={"laptop"}
						/>
						<Experience $delay={0.9} $scale={0.7}>
							<ExperienceYears>7 years</ExperienceYears>
							<ExperienceText>Experience</ExperienceText>
						</Experience>
						<Search $delay={0.95} $scale={0.3} onClick={() => setSearchText(!searchText)}>
							<HomeIcon/>
							<SearchText>{searchText ? "Search" : "Searching..."}</SearchText>
						</Search>
						<HomeIconStyled $delay={0.93} $scale={0.3} onClick={() => setClickedHome(!clickedHome)} className={clickedHome ? "active" : ""}>
							<HomeIcon/>
						</HomeIconStyled>
						<HomeMiniStyled $delay={0.91} $scale={0.3}>
							<HomeIcon/>
						</HomeMiniStyled>
						<PlusIconStyled $delay={0.99} $scale={0.3}>
							<PlusIcon/>
						</PlusIconStyled>
						<Sky
								$delay={0.8} $scale={0.7}
								src={"./images/sky.avif?v=1"}
								alt={"sky"}
						/>
					</Images>
				</Wrapper>
			</Block>
	);
};

export default Persona;
