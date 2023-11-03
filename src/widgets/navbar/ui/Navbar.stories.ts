import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Navbar } from "widgets/navbar"

const meta = {
    title: "widgets/navbar",
    component: Navbar,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
