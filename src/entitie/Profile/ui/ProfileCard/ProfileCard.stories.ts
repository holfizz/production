import type {Meta, StoryObj} from "@storybook/react"
import ProfileCard from "./ProfileCard"
import {Currency} from "entitie/Currency"
import {Country} from "entitie/Country"
import AvatarImg from 'shared/assets/test/storybook.jpg'

const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args:{
        data:{
            first: "Sergey",
            lastname: "Gorlachev",
            age: 16,
            currency: Currency.USD,
            country: Country.AMERICA,
            city: "St. Petersburg",
            username: "admin",
            avatar:AvatarImg
        }
    }
}

export const WithError: Story = {
    args:{
        errors:'error'
    }
}
export const IsLoading: Story = {
    args:{
        isLoading:true
    }
}
