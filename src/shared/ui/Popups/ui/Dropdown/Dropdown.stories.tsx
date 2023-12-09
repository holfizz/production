import type { Meta, StoryObj } from "@storybook/react"
import Dropdown, { DropdownItem } from "./Dropdown"
import Button, { ButtonTheme } from "@/shared/ui/Button/Button"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

const meta = {
    title: "shared/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>;

const items: DropdownItem[] = [
    { content: "item 1", disabled: false },
    { content: "item 2", disabled: false },
    { content: "item 3", disabled: false },
    { content: "item 4", disabled: true },
    { content: "item 5", disabled: false },
]

export const Light: Story = {
    args: {
        items: items,
        trigger: <Button theme={ButtonTheme.OUTLINE}>click</Button>,
    },
}

export const Dark: Story = {
    args: {
        items: [{ content: "first" }, { content: "second" }, { content: "third" }],
        trigger: <Button theme={ButtonTheme.OUTLINE}>click</Button>,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
export const TopLeft: Story = {
    args: {
        direction: "top left",
        items: items,
        trigger: <Button theme={ButtonTheme.OUTLINE}>click</Button>,
    },
}
export const TopRight: Story = {
    args: {
        direction: "top right",
        items: items,
        trigger: <Button theme={ButtonTheme.OUTLINE}>click</Button>,
    },
}
export const BottomLeft: Story = {
    args: {
        direction: "bottom left",
        items: items,
        trigger: <Button theme={ButtonTheme.OUTLINE}>click</Button>,
    },
}
export const BottomRight: Story = {
    args: {
        direction: "bottom right",
        items: items,
        trigger: <Button theme={ButtonTheme.OUTLINE}>click</Button>,
    },
}
