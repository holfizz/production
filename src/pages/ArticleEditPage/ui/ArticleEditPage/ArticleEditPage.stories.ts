import type { Meta, StoryObj } from "@storybook/react"
import ArticleEditPage from "./ArticleEditPage"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/ArticleEditPage",
    component: ArticleEditPage,
    parameters: {},
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators: [StoreDecorator({})],

}
