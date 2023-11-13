import {type RouteProps} from "react-router-dom"
import {AboutPage} from "pages/AboutPage"
import {MainPage} from "pages/MainPage"
import {NotFoundPage} from "pages/NotFoundPage"
import {ProfilePage} from "pages/ProfilePage"

export enum AppRouter {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: "/",
    [AppRouter.ABOUT]: "/about",
    [AppRouter.PROFILE]: "/profile",
    [AppRouter.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRouter.PROFILE]: {
        path: RouterPath.profile,
        element: <ProfilePage />,
    },
    [AppRouter.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
}
