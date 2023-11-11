import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
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
        theme:ButtonTheme.CLEAR,
    },

}


export const ClearDark: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Outline: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE,
    },

}
export const OutlineDark: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}


export const ButtonM: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE,
        size:ButtonSize.M
    },
}


export const ButtonL: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE,
        size:ButtonSize.L
    },
}


export const ButtonXL: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE,
        size:ButtonSize.XL
    },
}

export const Disabled: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE,
        size:ButtonSize.XL
    },
    decorators:[ThemeDecorator(Theme.DARK)]
}

