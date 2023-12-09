import type {Meta, StoryObj} from "@storybook/react"
import Select from "@/shared/ui/Select/Select"

const meta = {
    title: "shared/Select",
    component: Select,
    parameters: {
    },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Please enter a value',
        options:[
            {value:'1', content:'first point'},
            {value:'2', content:'second point'},
            {value:'3', content:'third point'},
            {value:'4', content:'fourth point'},
        ]
    },
}
