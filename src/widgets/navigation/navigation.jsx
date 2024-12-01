import {
	Nav,
	NavigationEmail,
	NavigationList,
	NavigationName,
	NavigationPhoto,
	NavigationPhotoWrapper,
	NavigationUser,
	NavWrapper
} from "./styled.js";
import NavigationLinks from "./ui/links/navigationLinks.jsx";

const Navigation = () => {
	return (
			<NavWrapper $duration={0.5}>
				<Nav>
					<NavigationUser>
						<NavigationPhotoWrapper>
							<NavigationPhoto $delay={1} $duration={0.5} src={"/images/avatar.png"}/>
						</NavigationPhotoWrapper>
						<NavigationName $delay={1} $duration={0.5}>Adil Ishenkulov</NavigationName>
						<NavigationEmail href={"mailto:ishenkulov4@gmail.com"} $delay={1} $duration={0.5}>
							<strong>ishenkulov4@gmail.com</strong>
						</NavigationEmail>
					</NavigationUser>
					<NavigationList>
						<NavigationLinks/>
					</NavigationList>
				</Nav>
			</NavWrapper>
	);
};

export default Navigation;
