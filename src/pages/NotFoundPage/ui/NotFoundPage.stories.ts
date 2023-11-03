import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { NotFoundPage } from "pages/NotFoundPage"

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
