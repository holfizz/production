import type { Meta, StoryObj } from "@storybook/react"
import Text, { TextSize, TextTheme } from "./Text"
import { Theme } from "@/shared/const/theme"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"

const meta = {
    title: "shared/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        title:'Title',
        text:"Description Description Description Description"
    },
}

export const PrimaryError: Story = {
    args: {
        title:'Title',
        text:"Description Description Description Description",
        theme:TextTheme.ERROR
    },
}


export const OnlyTitle: Story = {
    args: {
        title:'Title',
    },
}


export const OnlyText: Story = {
    args: {
        text:"Description Description Description Description"
    },
}

export const PrimaryDark: Story = {
    args: {
        title:'Title',
        text:"Description Description Description Description"
    },
    decorators:[ThemeDecorator(Theme.DARK)]
}


export const OnlyTitleDark: Story = {
    args: {
        title:'Title',
    },
    decorators:[ThemeDecorator(Theme.DARK)]

}


export const OnlyTextDark: Story = {
    args: {
        text:"Description Description Description Description"
    },
    decorators:[ThemeDecorator(Theme.DARK)]

}


export const SizeS: Story = {
    args: {
        size:TextSize.S,
        title:"Title title",
        text:"Description Description Description Description"
    },

}

export const SizeM: Story = {
    args: {
        size:TextSize.M,
        title:"Title title",
        text:"Description Description Description Description"
    },

}


export const SizeL: Story = {
    args: {
        size:TextSize.L,
        title:"Title title",
        text:"Description Description Description Description"
    },
}


export const SizeXL: Story = {
    args: {
        size:TextSize.XL,
        title:"Title title",
        text:"Description Description Description Description"
    },
}

