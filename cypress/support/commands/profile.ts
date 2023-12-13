import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage"

export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId("EditableProfileCardHeader.EditButton").click()
    cy.getByTestId("ProfileCard.firstname").clear().type(firstname)
    cy.getByTestId("ProfileCard.lastname").clear().type(lastname)
    cy.getByTestId("EditableProfileCardHeader.SaveButton").click()
}
export const resetProfile = (profileId: string) => {
    cy.request({
        method: "PUT",
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {Authorization:"sth"},
        body: {
            id: "4",
            first: "test",
            lastname: "user",
            age: 16,
            currency: "RUB",
            country: "Russia",
            city: "Moscow",
            username: "testuser",
            avatar: "https://images.unsplash.com/photo-1700319514512-1bcb679e04ab?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
        return body
    })
}
declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
