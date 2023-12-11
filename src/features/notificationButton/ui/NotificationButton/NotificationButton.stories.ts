import type { Meta, StoryObj } from "@storybook/react"
import NotificationButton from "./NotificationButton"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "features/NotificationButton",
    component: NotificationButton,
    parameters: {},
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: "GET",
                status: 200,
                response: [
                    { id: "1", title: "Notice", description: "News" },
                    { id: "1", title: "Notice", description: "News" },
                    { id: "1", title: "Notice", description: "News" },
                    { id: "1", title: "Notice", description: "News" },
                ],
            },
        ],
    },
}
