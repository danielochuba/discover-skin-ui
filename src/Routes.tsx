import NotFound from './NotFound';
import RouteErrorBoundary from './ErrorBoundary';
import WelcomePageRoute from '@/pages/welcome-page/route';
import { Outlet } from 'react-router-dom';
import DashboardPageRoute from '@/pages/dashboard/route';
import ExperienceDetailsPageRoute from '@/pages/experience-details/route';
export const allRoutes = [
    // guest routes
    //  WaitlistPageRoute,
    WelcomePageRoute,
    // dashboard routes
    DashboardPageRoute,
    ExperienceDetailsPageRoute,
    {
        path: "/",
        element: (
            <>
                <Outlet />
            </>
        ),
        errorElement: <RouteErrorBoundary />,
        children: [
            {
                path: "*",
                element: <NotFound />,
            },

            //  HomePageRoute,

        ],
    },

    // UserDashboardMessage,
    //  ChatPageRoute,
    {
        path: "*",
        element: <NotFound />,
    },
];
