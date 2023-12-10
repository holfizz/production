import type { Meta, StoryObj } from "@storybook/react"
import StarRating from "./StarRating"

const meta = {
    title: "shared/StarRating",
    component: StarRating,
    parameters: {},
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    
}
