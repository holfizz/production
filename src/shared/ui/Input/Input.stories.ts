import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import Input, { InputTheme } from "./Input"
import { Theme } from "@/shared/const/theme"

const meta = {
    title: "shared/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
    args: {
        placeholder:"text",
        theme:InputTheme.OUTLINE,
    },

}
export const OutlineDark: Story = {
    args: {
        placeholder:"text",
        theme:InputTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
