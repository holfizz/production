import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import Navbar from "./Navbar"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { Theme } from "@/shared/const/theme"

const meta = {
    title: "widgets/navbar",
    component: Navbar,
    parameters: {},
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [StoreDecorator({loginForm: {username: "user", password: "123"}})],
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({loginForm: {username: "user", password: "123"}})],
}

export const Auth: Story = {
    decorators: [StoreDecorator({
        user: {authData: {username: 'user', id: '1'}},
    })]
}

