import type {Meta, StoryObj} from "@storybook/react"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {Theme} from "app/providers/ThemeProvider"
<<<<<<< HEAD
import Sidebar from "./Sidebar"
=======
import {Sidebar} from "widgets/sidebar"
>>>>>>> 921c489 (fix all files and add loki)

const meta = {
    title: "widgets/sidebar",
    component: Sidebar,
    parameters: {
    },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>;


<<<<<<< HEAD
export const LightSidebar: Story = {
}


export const DarkSidebar: Story = {
=======
export const Light: Story = {
}


export const Dark: Story = {
>>>>>>> 921c489 (fix all files and add loki)
    decorators: [ThemeDecorator(Theme.DARK)],
}
