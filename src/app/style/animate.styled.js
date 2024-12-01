import {css, keyframes} from "styled-components";

export const scaleAnimate = css`
	opacity: 0;
	scale: ${({$scale}) => $scale ?? 0.8};
	transform: translateY(-20px);
	animation-name: animated;
	animation-delay: ${({$delay}) => $delay ? `${$delay}s` : "0.3s"};
	animation-duration: ${({$duration}) => $duration ? `${$duration}s` : "0.3s"};
	animation-fill-mode: forwards;
	@keyframes animated {
		100% {
			scale: 1;
			opacity: 1;
			transform: translateY(0px);
		}
	}
`

const fadeInUp = keyframes`
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

// Стиль анимации
export const fadeInText = css`
  opacity: 0;
  transform: translateY(20px); /* Начальное состояние */
  animation: ${fadeInUp} ${({ $duration }) => $duration ? `${$duration}s` : "0.3s"} ${({ $delay }) => $delay ? `${$delay}s` : "0.3s"} forwards;
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

// Стиль анимации
export const fadeInCenter = css`
  opacity: 0;
  transform: translateY(20px); /* Начальное состояние */
  animation: ${fadeIn} ${({ $duration }) => $duration ? `${$duration}s` : "0.3s"} ${({ $delay }) => $delay ? `${$delay}s` : "0.3s"} forwards;
`;
