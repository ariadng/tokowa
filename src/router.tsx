import { createBrowserRouter } from "react-router-dom";
import { AppView } from "./views";
import { WelcomePage } from "./pages/welcome/welcome.page";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppView />,
		children: [
			{
				path: "",
				element: <WelcomePage />,
			}
		]
	}
]);