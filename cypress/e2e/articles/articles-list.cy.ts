describe("Opens a page with a list of articles", () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit("articles")
        })
    })
    it("And the articles are loaded successfully", () => {
        cy.getByTestId("ArticleList").should("exist")
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3)
    })
})
