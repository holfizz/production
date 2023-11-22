import type {Meta, StoryObj} from "@storybook/react"
import Page from "./Page"

const meta = {
    title: "shared/Page",
    component: Page,
    parameters: {},
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {}
