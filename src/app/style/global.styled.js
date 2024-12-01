import {styled } from "styled-components";
import {scaleAnimate} from "./animate.styled.js";
export const MainWrapper = styled.main`
	max-width: 1200px;
	width: 100%;
	margin: 0px auto;
	display: flex;
	align-items: flex-start;
`

export const ContentWrapper = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
	padding: 30px 30px 30px 40px;
	height: min-content;
	gap: 40px;
`




export const Block = styled.div`
	width: 100%;
	padding: ${({$padding}) => $padding ? `${$padding}` : "0px"};
	background-color: rgb(33, 46, 57);
	border-radius: 32px;
	${scaleAnimate}
`
