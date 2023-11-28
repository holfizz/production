import type {Meta, StoryObj} from "@storybook/react"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {Theme} from "app/providers/ThemeProvider"
import ProfilePage from "./ProfilePage"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator"
import {Currency} from "entity/Currency"
import {Country} from "entity/Country"

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    first: "Sergey",
                    lastname: "Gorlachev",
                    age: 16,
                    currency: Currency.USD,
                    country: Country.AMERICA,
                    city: "St. Petersburg",
                    username: "admin",
                },
            },
        }),
    ],
}

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    first: "Sergey",
                    lastname: "Gorlachev",
                    age: 16,
                    currency: Currency.USD,
                    country: Country.AMERICA,
                    city: "St. Petersburg",
                    username: "admin",
                },
            },
        }),
    ],
}
