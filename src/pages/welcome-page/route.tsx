import ApplicationRoutes from "@/config/routes";
import WelcomePage from "@/template/welcome-page/WelcomePage";

const route = {
    path: ApplicationRoutes.WELCOME,
    element: <WelcomePage />
};
export default route;