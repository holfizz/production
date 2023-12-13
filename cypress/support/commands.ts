import * as commonCommands from "./commands/command"
import * as profileCommands from "./commands/profile"
import * as articleCommands from "./commands/article"
import * as commentsCommands from "./commands/comments"
import * as ratingCommand from "./commands/rating"

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(commentsCommands)
Cypress.Commands.addAll(ratingCommand)

export {}
