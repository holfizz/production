import type { Meta, StoryObj } from "@storybook/react"
import { ArticleRecommendationsList } from "./ArticleRecommendationsList"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { Article } from "@/entities/Article"

const meta = {
    title: "features/ArticleRecommendationsList",
    component: ArticleRecommendationsList,
    parameters: {},
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>;

const article: Article = {
    id: "1",
    img: "",
    createdAt: "",
    views: 123,
    user: { id: "1", username: "user" },
    blocks: [],
    type: [],
    title: "title",
    subtitle: "subtitle",
}
export const Normal: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: "GET",
                status: 200,
                response: [
                    { ...article, id: "1" },
                    { ...article, id: "3" },
                    { ...article, id: "4" },
                ],
            },
        ],
    },
    decorators: [StoreDecorator({})],

}
