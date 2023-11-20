import type {Meta, StoryObj} from "@storybook/react"
import Card from "./Card"

const meta = {
    title: "shared/Card",
    component: Card,
    parameters: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: 'text',
    },
}
