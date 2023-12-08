import type { Meta, StoryObj } from "@storybook/react"
import Popover from "./Popover"
import Button, { ButtonTheme } from "shared/ui/Button/Button"

const meta = {
    title: "shared/Popover",
    component: Popover,
    parameters: {},
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <Button theme={ButtonTheme.OUTLINE}>click</Button>,
        children:<h1>notice</h1>
    },
}
