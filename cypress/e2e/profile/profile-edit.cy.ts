let profileId:string
describe("User visit profile page", () => {
    beforeEach(() => {
        cy.visit("")
        cy.login().then((data) => {
            profileId = data.id
            cy.visit(`profile/${data.id}`)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it("And the profile has been successfully loaded", () => {
        cy.getByTestId("ProfileCard.firstname").should("have.value", "test")
    })
    it("And edits the profile", () => {
        const newName = "new"
        const newLastname = "lastname"
        cy.updateProfile(newName, newLastname)
        cy.getByTestId("ProfileCard.firstname").should("have.value", newName)
        cy.getByTestId("ProfileCard.lastname").should("have.value", newLastname)
    })
})
