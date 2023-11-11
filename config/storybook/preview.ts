import type {Preview} from "@storybook/react"
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator"
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {Theme} from "../../src/app/providers/ThemeProvider"
import {TranslationDecorator} from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator"

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
                layout:"centered"
            },
        },
    },
    decorators: [
        RouterDecorator,
<<<<<<< HEAD
        StyleDecorator,
        TranslationDecorator,
=======
        TranslationDecorator,
        StyleDecorator,
>>>>>>> 921c489 (fix all files and add loki)
        ThemeDecorator(Theme.LIGHT),
    ],
}

export default preview
