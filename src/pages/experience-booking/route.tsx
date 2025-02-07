import ApplicationRoutes from "@/config/routes";
import ExperienceBookingPage from "@/template/experience-booking/ExperienceBookingPage";

const route = {
    path: ApplicationRoutes.EXPERIENCES.RESERVE,
    element: <ExperienceBookingPage />
};
export default route;