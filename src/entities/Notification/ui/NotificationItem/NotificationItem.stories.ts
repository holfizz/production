import type { Meta, StoryObj } from "@storybook/react"
import NotificationItem from "./NotificationItem"
import { Notification } from "@/entities/Notification/model/types/notification"

const meta = {
    title: "entities/NotificationItem",
    component: NotificationItem,
    parameters: {},
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>;
const notification:Notification = {
    id: "1",
    title: "Уведомление 1",
    description: "Произошло какое-то событие",
    userId: "1",
}
export const Normal: Story = {
    args: {
        item: notification ,
    },
}
