import {Block} from "../../../../app/style/global.styled.js";
import {DateText, ExperienceWrapper, SubTitle, Text, Title} from "../../resume.styled.js";
import {COMPANY_LIST} from "../../../../app/data/company.js";

const Experience = () => {
	return (
			<Block $padding={"36px"} $delay={0.3} $duration={0.5}>
				<Title>Experience</Title>
				{COMPANY_LIST?.map((company, index) => (
						<ExperienceWrapper key={index}>
							<SubTitle $delay={0.4 + (index / 3.5)} $duration={0.5}>{company?.name}</SubTitle>
							<Text $delay={0.5 + (index / 3.5)} $duration={0.5}>{company?.position}</Text>
							<DateText  $delay={0.6 + (index / 3.5)} $duration={0.5}>{company?.date}</DateText>
							<Text $delay={0.7 + (index / 3.5)} $duration={0.5}>{company?.description}</Text>
						</ExperienceWrapper>
				))}
			</Block>
	);
};

export default Experience;
