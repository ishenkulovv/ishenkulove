import {styled} from "styled-components";
import {fadeInText} from "../../app/style/animate.styled.js";

export const TitleStyled = styled.h1`
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.8px;
	line-height: 1.2em;
	text-decoration: none;
	text-transform: none;
	color: rgb(249, 250, 254);
	${fadeInText}
`
export const WorksList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`
