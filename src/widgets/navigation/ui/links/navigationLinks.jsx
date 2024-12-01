import React from 'react'
import {NavigationHR, NavigationItem, NavigationLink} from "../../styled.js";
import {LINKS_ARRAY} from "../../const.js";

const NavigationLinks = () => {
	return (
			<React.Fragment>
				{LINKS_ARRAY?.map((link, index) => (
						<React.Fragment key={link?.path}>
							<NavigationItem $delay={1} $duration={0.5}>
								<NavigationLink to={link?.path}>{link?.label}</NavigationLink>
								{LINKS_ARRAY?.length - 1 !== index ? <NavigationHR/> : null}
							</NavigationItem>
						</React.Fragment>
				))}
			</React.Fragment>
	);
};

export default NavigationLinks;
