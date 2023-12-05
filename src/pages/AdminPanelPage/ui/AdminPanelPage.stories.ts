import type { Meta, StoryObj } from "@storybook/react"
import AdminPanelPage from "./AdminPanelPage"

const meta = {
    title: "shared/AdminPanelPage",
    component: AdminPanelPage,
    parameters: {},
} satisfies Meta<typeof AdminPanelPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
