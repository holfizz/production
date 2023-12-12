import type { Meta, StoryObj } from "@storybook/react"
import AvatarDropdown from "./AvatarDropdown"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import AvatarImg from "../../../../shared/assets/test/storybook.jpg"

const meta = {
    title: "features/AvatarDropdown",
    component: AvatarDropdown,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    decorators:[StoreDecorator({user:{
        authData:{
            avatar:AvatarImg
        }
    }})]
}
