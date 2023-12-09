import type { Meta, StoryObj } from "@storybook/react"
import AdminPanelPage from "./AdminPanelPage"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/AdminPanelPage",
    component: AdminPanelPage,
    parameters: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof AdminPanelPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
