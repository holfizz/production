import type {Meta, StoryObj} from "@storybook/react"
import ArticleImageBlockComponent from "./ArticleImageBlockComponent"

const meta = {
    title: "shared/ArticleImageBlockComponent",
    component: ArticleImageBlockComponent,
    parameters: {},
} satisfies Meta<typeof ArticleImageBlockComponent>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
