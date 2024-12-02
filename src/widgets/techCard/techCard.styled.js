import {styled} from "styled-components";
import {fadeInText} from "../../app/style/animate.styled.js";

export const TechWrapper = styled.div`
	${fadeInText}
`

export const TechName = styled.h4`
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.4em;
	text-decoration: none;
	text-transform: none;
	color: rgb(249, 250, 254);
	margin-top: 10px;
`

export const TechIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #25323E;
	border-radius: 14px;
	width: 54px;
	height: 54px;
	overflow: hidden;
	padding: 6px;
	box-sizing: border-box;
`

export const TechIcon = styled.img`
	display: block;
	width: 100%;
	object-position: center center;
	object-fit: cover;
	image-rendering: auto;
`

export const TechPreset =styled.p`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 1.6em;
	text-decoration: none;
	text-transform: none;
	color: rgb(171, 173, 176);
`
