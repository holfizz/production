import type {Meta, StoryObj} from "@storybook/react"
import CommentCard from "./CommentCard"

const meta = {
    title: "entities/CommentCard",
    component: CommentCard,
    parameters: {},
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args:{
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
    }
}

export const IsLoading: Story = {
    args:{
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        isLoading: true,
    }
}
