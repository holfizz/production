import type { Preview } from "@storybook/react"
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "../../src/app/providers/ThemeProvider"
import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator"
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator"

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
                layout: "centered",
            },
        },
    },
    decorators: [
        SuspenseDecorator,
        RouterDecorator,
        StyleDecorator,
        TranslationDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
}

export default preview
