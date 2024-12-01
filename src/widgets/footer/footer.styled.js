import {styled} from "styled-components";
import {scaleAnimate} from "../../app/style/animate.styled.js";

export const FooterStyled = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 60px;
	${scaleAnimate}
`

export const FooterSocials = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`

export const FooterSocial = styled.a`
	svg {
		width: 48px;
		height: 48px;
	}
`

export const FooterSocialIcon = styled.img``

export const FooterText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	letter-spacing: .5px;
	line-height: 1.4em;
	text-decoration: none;
	text-transform: none;
	color: rgb(171, 173, 176);
`
