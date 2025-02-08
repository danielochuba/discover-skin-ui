const ApplicationRoutes = {
    HOME: '/',
    WELCOME: '/welcome',
    USER: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        PROFILE: '/user/profile',
        LOGOUT: '/auth/logout',
        DASHBOARD: '/dashboard',
    },
    EXPERIENCES: {
        LIST: '/experiences',
        DETAIL: '/experiences/:id',
    }
}

export default ApplicationRoutes;