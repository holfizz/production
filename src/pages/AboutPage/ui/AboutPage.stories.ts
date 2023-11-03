import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { AboutPage } from "pages/AboutPage"

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
