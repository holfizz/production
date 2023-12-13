import { Article } from "@/entities/Article"

const defaultArticle = {
    title: "JavaScript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://images.unsplash.com/photo-1700159915592-004562ddcf6f?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 9912,
    createdAt: "26.02.2023",
    userId: "1",
    type: ["IT"],
    blocks: [],
}
export const createArticle = (article?: Article) => {
    cy.request({
        method: "POST",
        url: `http://localhost:8000/articles`,
        headers: { Authorization: "sth" },
        body: article ?? defaultArticle,
    }).then(response=>response.body)
}
export const removeArticle = (articleId: string) => {
    cy.request({
        method: "DELETE",
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: "sth" },
    })
}
declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
