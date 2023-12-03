import type { Meta, StoryObj } from "@storybook/react"
import ArticleInfinityList from "./ArticleInfinityList"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/Article/ArticleInfinityList",
    component: ArticleInfinityList,
    parameters: {},
} satisfies Meta<typeof ArticleInfinityList>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators: [StoreDecorator({})],

}

