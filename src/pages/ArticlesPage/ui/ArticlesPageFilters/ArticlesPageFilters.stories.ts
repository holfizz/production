import type { Meta, StoryObj } from "@storybook/react"
import ArticlesPageFilters from "./ArticlesPageFilters"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/ArticlesPageFilters",
    component: ArticlesPageFilters,
    parameters: {},
} satisfies Meta<typeof ArticlesPageFilters>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators: [StoreDecorator({})],
}
