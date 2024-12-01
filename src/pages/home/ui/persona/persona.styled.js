import {styled} from "styled-components";
import {fadeInText, scaleAnimate} from "../../../../app/style/animate.styled.js";
export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
`
export const Details = styled.div``
export const Info = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	padding: 30px;
`
export const Title = styled.h1`
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
export const SubTitle = styled.h2`
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
export const Images = styled.div`
	position: relative;
	height: 320px;
	width: 400px;
	overflow: hidden;
`
export const PText = styled.h1``
export const Position = styled.h2``

export const Laptop = styled.img`
	position: absolute;
	bottom: 60px;
	right: -30px;
	width: 145px;
	height: 145px;
	object-position: center center;
	object-fit: cover;
	image-rendering: auto;
	border-radius: 24px;
	${scaleAnimate}
`
export const Sky = styled.img`
	position: absolute;
	top: 77px;
	left: 3px;
	width: 110px;
	height: 110px;
	object-position: center center;
	object-fit: cover;
	image-rendering: auto;
	border-radius: 24px;
	box-shadow: rgba(26, 36, 45, 0.15) 0px 20px 40px 0px;
	${scaleAnimate}
`
export const PlusIconStyled = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	position: absolute;
	top: 85px;
	left: 14px;
	z-index: 4;
	transition: all 0.3s;
	${scaleAnimate}
	svg {
		width: 20px;
		height: 20px;
	}

	&:hover {
		transform: translateY(-3px) rotate(45deg);
		box-shadow: rgba(0,0,0,0.25) 0px 20px 40px 0px;
	}
`

export const HomeIconStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 25px 0px;
	position: absolute;
	top: 129px;
	z-index: 4;
	left: 165px;
	transition: all 0.3s;
	cursor: pointer;
	${scaleAnimate}
	&.active {
		transform: translateY(-5px);
		background-color: rgb(128, 146, 234);
		svg {
			color: white;
		}
	}
	svg {
		width: 20px;
		height: 20px;
	}
`

export const HomeMiniStyled = styled.div`
	width: 22px;
	height: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: white;
	position: absolute;
	bottom: 70px;
	right: 85px;
	transition: all 0.3s;
	${scaleAnimate}
	&:hover {
		transform: translateY(-3px);
	}
	svg {
		color: rgb(95, 97, 99);
		width: 14px;
		height: 14px;
	}
`

export const Search = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	background-color: rgb(255, 255, 255);
	border-radius: 24px;
	box-shadow: rgba(26, 36, 45, 0.15) 0px 10px 30px 0px;
	padding: 12px 24px 12px 12px;
	cursor: pointer;
	z-index: 5;
	position: absolute;
	top: 55px;
	right: 56px;
	${scaleAnimate}
	svg {
		margin-top: -2px;
		width: 20px;
		height: 20px;
	}
`
export const SearchText = styled.span`
	font-size: 10px;
	font-weight: 600;
	color: rgb(153, 153, 153);;
`

export const Experience = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	top: 145px;
	left: 65px;
	width: 163px;
	height: 87px;
	box-shadow: rgba(26, 36, 45, 0.15) 0px 20px 40px 0px;
	border-radius: 24px;
	background-color: rgb(255, 255, 255);
	z-index: 2;
	padding: 14px;
	${scaleAnimate}
`
export const ExperienceYears = styled.h3`
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.5px;
	line-height: 1.4em;
	color: rgb(26, 36, 45);
`
export const ExperienceText = styled.p`
	font-size: 8px;
	font-weight: 600;
	letter-spacing: 0.5px;
	line-height: 1.4em;
	color: rgb(153, 153, 153);
`
