export const setRate = (starsCount = 5, feedback = "feedbacks") => {
    cy.getByTestId(`StarRating.${starsCount}`).click()
    cy.getByTestId(`RatingCard.Input`).type(feedback)
    cy.getByTestId(`RatingCard.Send`).type(feedback)
}
declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, feedback: string): Chainable<void>;
    }
  }
}
