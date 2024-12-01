import {FooterSocial, FooterSocials, FooterStyled, FooterText} from "./footer.styled.js";
import {Block} from "../../app/style/global.styled.js";
import {InstagramIcon, LinkedInIcon, TelegramIcon} from "./icons/index.js";

const Footer = ({delay = 0.8, duration = 0.5}) => {
	return (
			<Block $padding={"60px 40px 30px 60px"}  $delay={delay} $duration={duration}>
				<FooterStyled>
					<FooterSocials>
						<FooterSocial href={"https://www.linkedin.com/in/adil-ishenkulov-b647b5189/"} target={"_blank"}>
							<LinkedInIcon/>
						</FooterSocial>
						<FooterSocial href={"https://www.linkedin.com/in/adil-ishenkulov-b647b5189/"} target={"_blank"}>
							<TelegramIcon/>
						</FooterSocial>
						<FooterSocial href={"https://www.instagram.com/ishenkulove/"} target={"_blank"}>
							<InstagramIcon/>
						</FooterSocial>
					</FooterSocials>
					<FooterText>
						© 2024 Dashby.Built by Adil.
					</FooterText>
				</FooterStyled>
			</Block>
	);
};

export default Footer;
