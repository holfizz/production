import type {Meta, StoryObj} from "@storybook/react"
import ArticleViewSelector from "./ArticleViewSelector"
import {ArticleView} from "entitie/Article"

const meta = {
    title: "entities/Article/ArticlePageSelector",
    component: ArticleViewSelector,
    parameters: {},
} satisfies Meta<typeof ArticleViewSelector>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        view: ArticleView.SMALL
    },
}
