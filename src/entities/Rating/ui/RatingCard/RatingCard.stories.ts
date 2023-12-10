import type { Meta, StoryObj } from "@storybook/react"
import RatingCard from "./RatingCard"

const meta = {
    title: "shared/RatingCard",
    component: RatingCard,
    parameters: {},
} satisfies Meta<typeof RatingCard>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
