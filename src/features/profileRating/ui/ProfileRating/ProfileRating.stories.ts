import type { Meta, StoryObj } from "@storybook/react"
import ProfileRating from "./ProfileRating"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "features/ProfileRating",
    component: ProfileRating,
    parameters: {},
} satisfies Meta<typeof ProfileRating>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        profileId: "1",
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: "GET",
                status: 200,
                response: [{ rate: 4 }],
            },
        ],
    },
    decorators: [StoreDecorator({})],
}
export const WithoutRate: Story = {
    args: {
        profileId: "1",
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: "GET",
                status: 200,
                response: [],
            },
        ],
    },
    decorators: [StoreDecorator({})],
}
