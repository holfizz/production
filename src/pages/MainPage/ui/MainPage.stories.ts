import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { MainPage } from "pages/MainPage"

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
