import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import AppLink from "./AppLink"
import { Theme } from "@/shared/const/theme"

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    parameters: {
        layout: "centered",
    },
    args: {
        to: "/",
    },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args:{
        children:'Home',
    }
}


export const Dark: Story = {
    args:{
        children:'Home',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
