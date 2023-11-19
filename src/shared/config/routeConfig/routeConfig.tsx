import {type RouteProps} from "react-router-dom"
import {AboutPage} from "pages/AboutPage"
import {MainPage} from "pages/MainPage"
import {NotFoundPage} from "pages/NotFoundPage"
import {ProfilePage} from "pages/ProfilePage"
import {ArticlesPage} from "pages/ArticlesPage"
import {ArticlesDetailsPage} from "pages/ArticlesDetailsPage"

export type AppRoutesProps = RouteProps & {
    authOnly?:boolean
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
  ARTICLES = "articles",
  ARTICLES_DETAILS = "articles_details",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // +:id
    [AppRoutes.ARTICLES]:"/articles",
    [AppRoutes.ARTICLES_DETAILS]:"/articles/", // + :id
    [AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RouterPath.profile}:id`,
        element: <ProfilePage />,
        authOnly:true
    },
    [AppRoutes.ARTICLES]: {
        path: RouterPath.articles,
        element: <ArticlesPage />,
        authOnly:true
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RouterPath.articles_details}:id`,
        element: <ArticlesDetailsPage />,
        authOnly:true
    },

    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
}
