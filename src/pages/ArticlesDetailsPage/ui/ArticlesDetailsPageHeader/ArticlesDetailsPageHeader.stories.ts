import type { Meta, StoryObj } from "@storybook/react"
import ArticlesDetailsPageHeader from "./ArticlesDetailsPageHeader"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/ArticleDetailsPage/ArticlesDetailsPageHeader",
    component: ArticlesDetailsPageHeader,
    parameters: {},
} satisfies Meta<typeof ArticlesDetailsPageHeader>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [StoreDecorator({})],
}
