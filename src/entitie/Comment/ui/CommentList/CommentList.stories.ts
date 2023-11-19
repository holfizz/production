import type {Meta, StoryObj} from "@storybook/react"
import CommentList from "./CommentList"

const meta = {
    title: "entities/CommentList",
    component: CommentList,
    parameters: {},
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: "1",
                text: "hello world",
                user: { id: "1", username: "Andrey" },
            },
            {
                id: "2",
                text: "Comment 2",
                user: { id: "1", username: "Alexey" },
            },
            {
                id: "3",
                text: "Comment 3",
                user: { id: "1", username: "Matvey" },
            },
        ],
    },
}

export const IsLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
}
