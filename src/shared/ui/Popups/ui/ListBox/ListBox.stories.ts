import type { Meta, StoryObj } from "@storybook/react"
import ListBox, { ListBoxItem } from "./ListBox"
import { action } from "@storybook/addon-actions"
import { t } from "i18next"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

const meta = {
    title: "shared/ListBox",
    component: ListBox,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>;

const people: ListBoxItem[] = [
    { value: "1", content: "text 1", disabled: false },
    { value: "2", content: "text 2", disabled: false },
    { value: "3", content: "text 3", disabled: false },
    { value: "4", content: "text 4", disabled: true },
    { value: "5", content: "text 5", disabled: false },
]
export const Light: Story = {
    args: {
        direction:'top right',
        items: people,
        onChange: action("value"),
        defaultValue: t("indicate currency"),
    },
}
export const Dark: Story = {
    args: {
        direction:'top right',
        items: people,
        onChange: action("value"),
        defaultValue: t("indicate currency"),
    },
    decorators:[ThemeDecorator(Theme.DARK)]
}
export const WithLabel: Story = {
    args: {
        direction:'top right',
        items: people,
        onChange: action("value"),
        defaultValue: t("indicate currency"),
        label: t("indicate currency"),
    },
}
export const TopLeft: Story = {
    args: {
        direction:'top left',
        items: people,
        onChange: action("value"),
        defaultValue: t("indicate currency"),
    },
}
export const TopRight: Story = {
    args: {
        value:'123',
        direction:'top right',
        items: people,
        onChange: action("value"),
        defaultValue: t("indicate currency"),
    },
}
export const BottomLeft: Story = {
    args: {
        direction:'bottom left',
        items: people,
        onChange: action("value"),
        defaultValue: t("indicate currency"),
    },
}
export const BottomRight: Story = {
    args: {
        direction:'bottom right',
        items: people,
        onChange: action("value"),
        defaultValue: t("indicate currency"),
    },
}
