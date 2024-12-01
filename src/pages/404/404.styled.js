import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {fadeInText} from "../../app/style/animate.styled.js";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
`
export const SmileStyled = styled.div`
	width: 220px;
	${fadeInText}
`

export const Text = styled.p`
	max-width: 500px;
	width: 100%;
	text-align: center;
	font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif;
	font-size: 22px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0em;
	line-height: 1.6em;
	text-decoration: none;
	text-transform: none;
	color: rgb(171, 173, 176);
	${fadeInText}
`

export const LinkStyled = styled(NavLink)`
	font-size: 14px;
	font-weight: 600;
	text-align: center;
	color: rgb(128, 146, 234);
	text-decoration: none;
	${fadeInText}
`
