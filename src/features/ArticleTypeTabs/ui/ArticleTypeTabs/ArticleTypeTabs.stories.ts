import type { Meta, StoryObj } from "@storybook/react"
import ArticleTypeTabs from "./ArticleTypeTabs"
import { action } from "@storybook/addon-actions"
import { ArticleType } from "@/entities/Article"

const meta = {
    title: "features/ArticleTypeTabs",
    component: ArticleTypeTabs,
    parameters: {},
} satisfies Meta<typeof ArticleTypeTabs>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args:{
        value:ArticleType.SCIENCE,
        onChangeType:action('onChangeType')
    },

}
