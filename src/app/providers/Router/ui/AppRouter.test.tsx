import { componentRender } from "@/shared/lib/tests/componentRender/componentRender"
import AppRouter from "./AppRouter"
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from "@/shared/const/router"
import { screen } from "@testing-library/react"
import { UserRole } from "@/entities/User"

describe("AppRouter.test", () => {
    test("The pages should render", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        })
        const page = await screen.findByTestId("AboutPage")
        expect(page).toBeInTheDocument()
    })
    test("Page not found", async () => {
        componentRender(<AppRouter />, {
            route: "/random_path",
        })
        const page = await screen.findByTestId("NotFoundPage")
        expect(page).toBeInTheDocument()
    })
    test("Redirecting an unauthorized user to the home page", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
        })
        const page = await screen.findByTestId("MainPage")
        expect(page).toBeInTheDocument()
    })
    test("Access to a private page for an authorized user", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: { _mounted: true, authData: {} },
            },
        })
        const page = await screen.findByTestId("ProfilePage")
        expect(page).toBeInTheDocument()
    })
    test("Access denied (role missing)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _mounted: true, authData: {} },
            },
        })
        const page = await screen.findByTestId("ForbiddenPage")
        expect(page).toBeInTheDocument()
    })
    test("Access allowed (role present)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _mounted: true, authData: { roles: [UserRole.ADMIN] } },
            },
        })
        const page = await screen.findByTestId("AdminPanelPage")
        expect(page).toBeInTheDocument()
    })
})
