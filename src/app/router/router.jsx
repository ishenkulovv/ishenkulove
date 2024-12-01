import {Route, Routes} from "react-router-dom";
import {Contact, Home, NotFoundPage, Resume, Works} from "../../pages/index.js";

const CustomRouter = () => {
	return (
		<Routes>
			<Route path={""} element={<Home />} />
			<Route path={"/works"} element={<Works />} />
			<Route path={"/resume"} element={<Resume />} />
			<Route path={"/contact"} element={<Contact />} />
			<Route path={"/*"} element={<NotFoundPage />} />
		</Routes>
	);
};

export default CustomRouter;
