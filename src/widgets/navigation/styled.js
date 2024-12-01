import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {fadeInCenter, scaleAnimate} from "../../app/style/animate.styled.js";
export const NavWrapper = styled.aside`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px 0px 30px 30px;
	height: 100vh;
	width: 350px;
	position: sticky;
	top: 0;
	left: 0;
	${scaleAnimate}
`
export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 100%;
	background-color: rgb(33, 46, 57);
	border-radius: 32px;
	width: 350px;
	will-change: transform, opacity;
`
export const NavigationList = styled.ul`
	list-style: none;
	display: flex;
	gap: 10px;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 30px;
	height: 250px;
	overflow: visible;
	width: 100%;
`
export const NavigationItem = styled.li`
	width: 100%;
	${fadeInCenter}
`
export const NavigationLink = styled(NavLink)`
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	letter-spacing: .8px;
	line-height: 1.6em;
	text-decoration: none;
	text-transform: uppercase;
	color: rgb(171, 173, 176);
	&:hover {
		color: #3f4673;
	}
	&.active {
		color: rgb(128, 146, 234);
	}
`
export const NavigationHR = styled.div`
	flex: none;
	height: 1px;
	overflow: visible;
	position: relative;
	width: 100%;
	background-color: rgb(102, 102, 102);
	opacity: 0.2;
	margin-top: 10px;
`
export const NavigationUser = styled.div`
	padding: 30px;
`
export const NavigationName = styled.h2`
	color: rgb(128, 146, 234);
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.4em;
	margin-top: 22px;
	${fadeInCenter}
`
export const NavigationEmail = styled.a`
	display: block;
	color: rgb(171, 173, 176);
	text-decoration: none;
	margin-top: 5px;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 1.6em;
	text-transform: none;
		${fadeInCenter}
`
export const NavigationPhotoWrapper = styled.div``
export const NavigationPhoto = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	${fadeInCenter}
`
