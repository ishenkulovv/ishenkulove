import {styled} from "styled-components";
import {fadeInText} from "../../app/style/animate.styled.js";

export const Title = styled.h3`
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	letter-spacing: 2px;
	line-height: 1.4em;
	text-decoration: none;
	text-transform: uppercase;
	color: rgb(128, 146, 234);
	${fadeInText}
`

export const Text = styled.p`
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0;
	line-height: 1.6em;
	text-decoration: none;
	text-transform: none;
	color: rgb(249, 250, 254);
	${fadeInText}
`
export const NoteContent = styled.section`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 30px;
	flex-direction: column;
`
export const ButtonWrapper = styled.div`
	display: flex;
	place-items: center;
	place-content: center;
	max-width: 150px;
	width: 100%;
	${fadeInText}
	button {
		padding: 20px;
	}
`
export const TechStackWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 16px;
	margin-top: 30px;
`
