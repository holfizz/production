import type {Meta, StoryObj} from "@storybook/react"
import ArticleDetails from "./ArticleDetails"

const meta = {
    title: "shared/ArticleDetails",
    component: ArticleDetails,
    parameters: {},
} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args:{
        id:''
    }
}
