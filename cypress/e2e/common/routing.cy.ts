import { selectByTestId } from "../../helpers/selectByTestId"

describe("Routing", () => {
    describe("User isn't authorized", () => {
        it("Go to main page", () => {
            cy.visit("/")
            cy.get(selectByTestId("MainPage")).should("exist")
        })
        it("Go to profile page", () => {
            cy.visit("/profile/1")
            cy.get(selectByTestId("MainPage")).should("exist")
        })
        it("Opens a non-existent route", () => {
            cy.visit("/random_url")
            cy.get(selectByTestId("NotFoundPage")).should("exist")
        })
    })
    describe("User is authorized", () => {
        beforeEach(() => {
            cy.login()
        })
        it("Go to profile page", () => {
            cy.visit("/profile/1")
            cy.get(selectByTestId("ProfilePage")).should("exist")
        })
        it("Opens a page with a list of articles ", () => {
            cy.visit("/articles")
            cy.get(selectByTestId("ArticlesPage")).should("exist")
        })
    })
})
