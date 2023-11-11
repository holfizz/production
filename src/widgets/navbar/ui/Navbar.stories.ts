import type {Meta, StoryObj} from "@storybook/react"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {Theme} from "app/providers/ThemeProvider"
<<<<<<< HEAD
import Navbar from "./Navbar"
=======
import {Navbar} from "widgets/navbar"
>>>>>>> 921c489 (fix all files and add loki)
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "widgets/navbar",
    component: Navbar,
    parameters: {},
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [StoreDecorator({ loginForm: { username: "user", password: "123" } })],
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: "user", password: "123" } })],
}

export const Auth: Story = {
    decorators: [StoreDecorator({
<<<<<<< HEAD
        user: { authData: {username:'user', id:'1'}  },
=======
        user: { authData: {} },
>>>>>>> 921c489 (fix all files and add loki)
    })]
}

