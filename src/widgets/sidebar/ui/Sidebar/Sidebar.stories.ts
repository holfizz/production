import type {Meta, StoryObj} from "@storybook/react"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {Theme} from "app/providers/ThemeProvider"
import Sidebar from "./Sidebar"

const meta = {
    title: "widgets/sidebar",
    component: Sidebar,
    parameters: {
    },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>;


export const LightSidebar: Story = {
}


export const DarkSidebar: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
