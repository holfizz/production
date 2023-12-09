import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import MainPage from "./MainPage"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    parameters: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {

}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK) ],
}
