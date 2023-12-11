import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import Loader from "./Loader"
import { Theme } from "@/shared/const/theme"

const meta = {
    title: "shared/Loader",
    component: Loader,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
