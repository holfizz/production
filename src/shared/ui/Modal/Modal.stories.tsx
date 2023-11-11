import type {Meta, StoryObj} from "@storybook/react"
import Button from "shared/ui/Button/Button"
import {Theme} from "app/providers/ThemeProvider"
import Modal from "./Modal"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator"

const meta = {
    title: "shared/modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>;

export default meta

export const ModalLight: Story = {
    args: {
        isOpen:true,
        children:'Text',
    },
}

export const ModalDark: Story = {
    args: {
        isOpen:true,
        children:'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}



