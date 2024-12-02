import {Block} from "../../../../app/style/global.styled.js";
import {DateText, ExperienceWrapper, SubTitle, Text, Title} from "../../resume.styled.js";
import {COMPANY_LIST} from "../../../../app/data/company.js";

const Experience = () => {
	return (
			<Block $padding={"36px"} $delay={0.3} $duration={0.5}>
				<Title>Experience</Title>
				{COMPANY_LIST?.map((company, index) => (
						<ExperienceWrapper key={index}>
							<SubTitle>{company?.name}</SubTitle>
							<Text>{company?.position}</Text>
							<DateText>{company?.date}</DateText>
							<Text>{company?.description}</Text>
						</ExperienceWrapper>
				))}
			</Block>
	);
};

export default Experience;
