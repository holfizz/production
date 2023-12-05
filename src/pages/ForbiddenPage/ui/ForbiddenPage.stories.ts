import type { Meta, StoryObj } from "@storybook/react"
import ForbiddenPage from "./ForbiddenPage"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/ForbiddenPage",
    component: ForbiddenPage,
    parameters: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ForbiddenPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
