import {styled} from "styled-components";

export const ButtonStyled = styled.button`
	gap: 5px;
	font-size: 16px;
	line-height: 1;
	font-weight: 500;
	width: 100%;
	height: 100%;
	display: flex;
	place-items: center;
	text-decoration: none;
	padding: 10px 20px;
	color: rgb(255, 255, 255);
	background-color: rgb(128, 146, 234);
	border-radius: 50px;
	user-select: none;
	white-space: nowrap;
	cursor: pointer;
	outline: none;
	border: none;
	transition: all 0.3s;
	&:hover {
		transform: translateY(-3px);
	}
	&:active {
		transform: translateY(0px);
	}
`
