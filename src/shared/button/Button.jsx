import React from 'react';
import {ButtonStyled} from "./button.styled.js";

const Button = ({children, handler}) => {
	return (
			<ButtonStyled onClick={handler}>
				{children}
			</ButtonStyled>
	);
};

export default Button;
