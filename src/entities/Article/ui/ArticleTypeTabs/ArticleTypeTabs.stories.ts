import type { Meta, StoryObj } from "@storybook/react"
import ArticleTypeTabs from "./ArticleTypeTabs"
import { ArticleType } from '../..'
import { action } from "@storybook/addon-actions"

const meta = {
    title: "entities/Article/ArticleTypeTabs",
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
