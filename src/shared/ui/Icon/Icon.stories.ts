import type {Meta, StoryObj} from "@storybook/react"
import Icon from "./Icon"
import {Eye} from "lucide-react"

const meta = {
    title: "shared/Icon",
    component: Icon,
    parameters: {},
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args:{
        SVG:Eye
    }
}
