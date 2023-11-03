import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Sidebar } from "widgets/sidebar"

const meta = {
    title: "widgets/sidebar",
    component: Sidebar,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
