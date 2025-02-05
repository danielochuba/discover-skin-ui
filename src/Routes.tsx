import WelcomePageRoute from '@/pages/welcome-page/route';
import NotFound from './NotFound';
import RouteErrorBoundary from './ErrorBoundary';
import { Outlet } from 'react-router-dom';
export const allRoutes = [
    // guest routes
    //  WaitlistPageRoute,
    WelcomePageRoute,
    // dashboard routes
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
