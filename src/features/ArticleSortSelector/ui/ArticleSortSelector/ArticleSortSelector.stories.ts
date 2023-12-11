import type { Meta, StoryObj } from "@storybook/react"
import ArticleSortSelector from "./ArticleSortSelector"
import { ArticleSortField } from "@/entities/Article"
import { action } from "@storybook/addon-actions"

const meta = {
    title: "entities/Article/ArticleTypeTabs",
    component: ArticleSortSelector,
    parameters: {},
} satisfies Meta<typeof ArticleSortSelector>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args:{
        sort:ArticleSortField.TITLE,
        order:'asc',
        onChangeOrder:action('onChangeOrder'),
        onChangeSort:action('onChangeSort')

    },

}
