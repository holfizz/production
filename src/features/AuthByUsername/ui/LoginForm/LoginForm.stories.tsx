import type { Meta, StoryObj } from "@storybook/react"
import LoginForm from "./LoginForm"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {username: "123", password: "asd"},
        }),
        ThemeDecorator(Theme.LIGHT)
    ],
}

export const LoginFormDark: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {username: "123", password: "asd"},
        }),
        ThemeDecorator(Theme.DARK)
    ],
}

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {username: "123", password: "asd", error: "Error",},
        }),
    ],
}

export const Loading: Story = {
    decorators: [StoreDecorator({
        loginForm: {isLoading: true},
    })]
}
