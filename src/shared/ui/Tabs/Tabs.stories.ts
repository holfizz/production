import type { Meta, StoryObj } from "@storybook/react"
import Tabs from "./Tabs"
import { action } from "@storybook/addon-actions"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

const meta = {
    title: "shared/Tabs",
    component: Tabs,
    parameters: {},
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        tabs: [
            { value: "tab 1", content: "tab 1" },
            { value: "tab 2", content: "tab 2" },
            { value: "tab 3", content: "tab 3" },
            { value: "tab 4", content: "tab 4" },
        ],
        value:"tab 2",
        onTabClick:action('onTabClick')
    },
}
export const Dark: Story = {
    args: {
        tabs: [
            { value: "tab 1", content: "tab 1" },
            { value: "tab 2", content: "tab 2" },
            { value: "tab 3", content: "tab 3" },
            { value: "tab 4", content: "tab 4" },
        ],
        value:"tab 2",
        onTabClick:action('onTabClick')
    },
    decorators:[ThemeDecorator(Theme.DARK)]
}
