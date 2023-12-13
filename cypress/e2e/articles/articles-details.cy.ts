let currentArticleId = ""
describe("Opened the page with the article", () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it("And sees the content of the article", () => {
        cy.getByTestId("ArticleDetails.Info").should("exist")
    })
    it("And sees the content of the recommendations article list", () => {
        cy.getByTestId("ArticleRecommendationsList").should("exist")
    })
    it.skip("And leave a comment", () => {
        cy.getByTestId("ArticleDetails.Info")
        cy.getByTestId("AddCommentForm").scrollIntoView()
        cy.getByTestId("AddCommentForm.Input").clear().type("text")
        cy.getByTestId("AddCommentForm.Button").click()
    })
    it("And leave rating", () => {
        cy.intercept('GET', '**/articles/*', {fixture:'article-details.json'})
        cy.getByTestId("ArticleDetails.Info")
        cy.getByTestId("RatingCard").scrollIntoView()
        cy.setRate(5, "feedback")
        cy.get("[data-selected=true]").should("have.length", 5)
    })
})
