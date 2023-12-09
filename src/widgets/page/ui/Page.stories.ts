import type { Meta, StoryObj } from "@storybook/react"
import Page from "./Page"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "widgets/Page",
    component: Page,
    parameters: {},
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators:[StoreDecorator({})]
}
