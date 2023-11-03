import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { PageError } from "widgets/pageError"

const meta = {
    title: "widgets/pageError",
    component: PageError,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
