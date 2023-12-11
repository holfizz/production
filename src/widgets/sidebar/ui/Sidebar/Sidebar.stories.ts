import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import Sidebar from "./Sidebar"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { Theme } from "@/shared/const/theme"

const meta = {
    title: "widgets/sidebar",
    component: Sidebar,
    parameters: {},
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>;

export const LightSidebar: Story = {
    decorators: [StoreDecorator({user: {authData: {}}})],
}

export const DarkSidebar: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({user: {authData: {}}}),
    ],
}

export const NoAuth: Story = {
    decorators: [StoreDecorator({user: {}})],
}
