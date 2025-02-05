import ApplicationRoutes from "@/config/routes";
import DashboardPage from "@/template/dashboard/DashboardPage";


const route = {
    path: ApplicationRoutes.USER.DASHBOARD,
    element: <DashboardPage />
};
export default route;