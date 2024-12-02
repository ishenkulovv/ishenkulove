import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {scaleAnimate} from "../../app/style/animate.styled.js";

export const WrapperStyled = styled(NavLink)`
	display: block;
	max-width: 370px;
	width: 100%;
	min-height: 370px;
	overflow: hidden;
	border-radius: 32px;
	position: relative;
	cursor: pointer;
	${scaleAnimate}
`

export const TitleStyled = styled.h3`
	background-color: rgb(26, 36, 45);
	border-radius: 999px;
	width: max-content;
	color: rgb(255, 255, 255);
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	letter-spacing: 0.5px;
	line-height: 1.4em;
	padding: 20px;
	position: absolute;
	bottom: 12px;
	left: 16px;
	cursor: pointer;
`
export const ImageStyled = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -5;
	cursor: pointer;
`

export const LinkStyled = styled.div`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(241, 241, 241);
	padding: 10px;
	position: absolute;
	top: 16px;
	right: 16px;
	transition: all 0.3s;
	cursor: pointer;
	svg {
		width: 18px;
		height: 18px;
	}
	&:hover {
		width: 70px;
		border-radius: 32px;
	}
`
