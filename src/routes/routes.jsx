import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import AboutPage from "../Layouts/AboutPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
    },
    {
        path: '/about',
        element : <AboutPage></AboutPage>
    }
])

export default routes;