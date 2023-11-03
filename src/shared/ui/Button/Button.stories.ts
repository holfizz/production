import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import Button, { ThemeButton } from "shared/ui/Button/Button"
import { Theme } from "app/providers/ThemeProvider"

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;


export const Clear: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.CLEAR,
    },

}


export const ClearDark: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const outline: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.OUTLINE,
    },

}
export const outlineDark: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],

}

