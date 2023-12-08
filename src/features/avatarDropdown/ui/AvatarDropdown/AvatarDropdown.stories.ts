import type { Meta, StoryObj } from "@storybook/react"
import AvatarDropdown from "./AvatarDropdown"

const meta = {
    title: "shared/AvatarDropdown",
    component: AvatarDropdown,
    parameters: {},
} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
