import {Block} from "../../../../app/style/global.styled.js";
import {DateText, ExperienceWrapper, SubTitle, Text, Title} from "../../resume.styled.js";

const Education = () => {
	return (
			<Block $padding={"36px"} $delay={0.8} $duration={0.5}>
				<Title>Education</Title>
				<ExperienceWrapper>
					<SubTitle $delay={0.8} $duration={0.5}>Kyrgyz State University</SubTitle>
					<Text $delay={0.9} $duration={0.5}>Software Engineering</Text>
					<DateText  $delay={1} $duration={0.5}>2016 - 2022</DateText>
					<Text $delay={1.1} $duration={0.5}>
						My final project involved developing a web application for searching homes based on more than 10 criteria, such as price, location, and number of rooms,
						with the ability to compare results with saved listings. I used web scraping to gather data from popular real estate websites, ensuring real-time data accuracy.
						I also designed an intuitive and visually appealing interface, making the application user-friendly and pleasant to use.
					</Text>
				</ExperienceWrapper>
			</Block>
	);
};

export default Education;
