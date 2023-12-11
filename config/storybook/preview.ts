import type { Preview } from "@storybook/react"
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator"
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator"
import { Theme } from "../../src/shared/const/theme"

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
        themes: {
            default: "twitter",
            list: [
                { name: "light", class: Theme.LIGHT, color: "#e5e5f8" },
                { name: "dark", class: Theme.DARK, color: "#171515" },
            ],
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
