import type { Meta, StoryObj } from "@storybook/react"
import ForbiddenPage from "./ForbiddenPage"

const meta = {
    title: "shared/ForbiddenPage",
    component: ForbiddenPage,
    parameters: {},
} satisfies Meta<typeof ForbiddenPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
