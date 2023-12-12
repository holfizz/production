import type { Meta, StoryObj } from "@storybook/react"
import NotificationList from "./NotificationList"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "entities/NotificationList",
    component: NotificationList,
    parameters: {},
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators:[StoreDecorator({})]
}
