import {Block} from "../../../../app/style/global.styled.js";
import {ButtonWrapper, NoteContent, Text, Title} from "../../resume.styled.js";
import Button from "../../../../shared/button/Button.jsx";

const Note = () => {
	
	const downloadCv = () => {
		const link = document.createElement("a");
		link.href = "/CV/Adil_Ishenkulov_CV.pdf";
		link.download = "Adil_Ishenkulov_CV.pdf";
		link.click();
	}
	
	return (
			<Block $padding={"36px"} $delay={0.5} $duration={0.5}>
				<NoteContent>
					<Title $delay={0.9} $duration={0.4}>Note</Title>
					<Text $delay={1} $duration={0.4}>
						Front-end Developer with 7 years of experience specializing in creating user-centric web and mobile
						applications.
						Proficient in modern technologies and frameworks, delivering innovative solutions in diverse domains,
						including e-commerce,
						CRM systems, dashboards, and organizational platforms
					</Text>
					<ButtonWrapper $delay={1.1} $duration={0.4}>
						<Button handler={downloadCv}>Download CV</Button>
					</ButtonWrapper>
				</NoteContent>
			</Block>
	);
};

export default Note;
