import {styled} from "styled-components";
import {scaleAnimate} from "../../../../app/style/animate.styled.js";

export const Wrapper = styled.div`
	display: grid;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	height: max-content;
${scaleAnimate}
`
