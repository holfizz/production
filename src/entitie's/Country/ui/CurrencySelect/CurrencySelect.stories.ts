import type {Meta, StoryObj} from "@storybook/react"
import CountrySelect from "./CurrencySelect"

const meta = {
    title: "entities/CountrySelect",
    component: CountrySelect,
    parameters: {
    },
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
}
