import type {Meta, StoryObj} from "@storybook/react"
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {Theme} from "@/app/providers/ThemeProvider"
import Loader from "@/shared/ui/Loader/Loader"

const meta = {
    title: "shared/Loader",
    component: Loader,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
