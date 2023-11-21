import type {Meta, StoryObj} from "@storybook/react"
import ArticleViewSelector from "./ArticleViewSelector"

const meta = {
    title: "shared/ArticleViewSelector",
    component: ArticleViewSelector,
    parameters: {},
} satisfies Meta<typeof ArticleViewSelector>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
