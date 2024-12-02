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
			<Block $padding={"36px"} $delay={0.1} $duration={0.5}>
				<NoteContent>
					<Title $delay={0.3} $duration={0.4}>Note</Title>
					<Text $delay={0.4} $duration={0.4}>
						Front-end Developer with 7 years of experience, specializing in creating high-quality web and mobile applications.
						Strong knowledge of modern technologies and frameworks enables the development of innovative solutions focused
						on user experience, convenience, and efficiency.
					</Text>
					<ButtonWrapper $delay={0.5} $duration={0.4}>
						<Button handler={downloadCv}>Download CV</Button>
					</ButtonWrapper>
				</NoteContent>
			</Block>
	);
};

export default Note;
