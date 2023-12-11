import type { Meta, StoryObj } from "@storybook/react"
import { Drawer } from "./Drawer"
import { action } from "@storybook/addon-actions"
import { NotificationItem } from "@/entities/Notification"

const meta = {
    title: "shared/Drawer",
    component: Drawer,
    parameters: {},
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>;
const item = {
    id: "1",
    title: "Уведомление 1",
    description: "Произошло какое-то событие",
    userId: "1",
}
export const Normal: Story = {
    args: {
        isOpen: true,
        onClose: action("close"),
        children: (
            <>
                <NotificationItem key={item.id} item={item} />
                <br/>
                <NotificationItem key={item.id} item={item} />
                <br/>
                <NotificationItem key={item.id} item={item} />
            </>
        ),
    },
}
