import type { Meta, StoryObj } from "@storybook/react"
import ArticleRating from "./ProfileRating"

const meta = {
    title: "shared/ArticleRating",
    component: ArticleRating,
    parameters: {},
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args:{
        profileId:'1'
    }
}
