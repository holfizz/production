import type { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import AboutPage from "./AboutPage"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { Theme } from "@/shared/const/theme"

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    parameters: {},
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    decorators: [StoreDecorator({})],

}


export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}
