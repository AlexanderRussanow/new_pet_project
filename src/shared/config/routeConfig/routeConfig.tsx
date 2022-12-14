import { PostsPage } from 'pages/PostsPage';
import { ProfilePage } from 'pages/Profile';
import { HomePage } from 'pages/Home';
import { Page404 } from 'pages/Page404';
import { RouteProps } from 'react-router-dom';
import { PostDetailPage } from 'pages/PostDetailsPage';
import { AboutPage } from 'pages/AboutPage';
import { PostCreateEditPage } from 'pages/PostCreateEditPage';

export type AppRouteProps = RouteProps & {
    private?: boolean;
};

export enum AppRoutes {
    HOME = 'home',
    PROFILE = 'profile',
    POSTS = 'posts',
    PAGE_404 = '404',
    POST_DETAIL = 'postDetail',
    ABOUT_PAGE = 'aboutPage',
    POST_CREATE = 'postCreate',
    POST_EDIT = 'postEdit',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [ AppRoutes.HOME ]: '/',
    [ AppRoutes.PROFILE ]: '/profile/',
    [ AppRoutes.POSTS ]: '/posts',
    [ AppRoutes.POST_DETAIL ]: '/posts/',
    [ AppRoutes.ABOUT_PAGE ]: '/about',
    [ AppRoutes.POST_CREATE ]: '/posts/create',
    [ AppRoutes.POST_EDIT ]: '/posts/:id/edit',
    [ AppRoutes.PAGE_404 ]: '*',
};

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
    [ AppRoutes.HOME ]: {
        path: RoutesPath[ AppRoutes.HOME ],
        element: <HomePage />,
    },
    [ AppRoutes.ABOUT_PAGE ]: {
        path: RoutesPath[ AppRoutes.ABOUT_PAGE ],
        element: <AboutPage />,
    },
    [ AppRoutes.PROFILE ]: {
        path: RoutesPath[ AppRoutes.PROFILE ] + ':id',
        element: <ProfilePage />,
        private: true,
    },
    [ AppRoutes.POSTS ]: {
        path: RoutesPath[ AppRoutes.POSTS ],
        element: <PostsPage />,
        private: true,
    },
    [ AppRoutes.POST_DETAIL ]: {
        path: RoutesPath[ AppRoutes.POST_DETAIL ] + ':id',
        element: <PostDetailPage />,
        private: true,
    },
    [ AppRoutes.POST_CREATE ]: {
        path: RoutesPath[ AppRoutes.POST_CREATE ],
        element: <PostCreateEditPage />,
        private: true,
    },
    [ AppRoutes.POST_EDIT ]: {
        path: RoutesPath[ AppRoutes.POST_EDIT ],
        element: <PostCreateEditPage />,
        private: true,
    },
    [ AppRoutes.PAGE_404 ]: {
        path: RoutesPath[ AppRoutes.PAGE_404 ],
        element: <Page404 />,
    },
};
