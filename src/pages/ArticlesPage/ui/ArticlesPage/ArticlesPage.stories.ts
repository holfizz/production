import type { Meta, StoryObj } from "@storybook/react"
import ArticlesPage from "./ArticlesPage"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/Article/ArticlesPage",
    component: ArticlesPage,
    parameters: {},
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators: [StoreDecorator({})],

}
