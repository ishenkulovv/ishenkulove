import React from 'react';
import {Block} from "../../app/style/global.styled.js";
import {Footer} from "../../widgets/index.js";
import Smile from "./icons/smile.jsx";
import {LinkStyled, SmileStyled, Text, Wrapper} from "./404.styled.js";

const NotFoundPage = () => {
	return (
			<React.Fragment>
				<Block $padding={"100px 20px"} $delay={0.5} $duration={0.5}>
					<Wrapper>
						<SmileStyled $delay={0.9} $duration={0.5}>
							<Smile/>
						</SmileStyled>
						<Text $delay={0.95} $duration={0.5}>
							Oops! The page you are looking for doesn't exist or has been moved. Please go back to the
							homepage.
						</Text>
						<LinkStyled $delay={1} $duration={0.5} to={"/"}>Go to home</LinkStyled>
					</Wrapper>
				</Block>
				<Footer/>
			</React.Fragment>
	);
};

export default NotFoundPage;
