import { componentRender } from "@/shared/lib/tests/componentRender/componentRender"
import { EditableProfileCard } from "./EditableProfileCard"
import { Profile } from "@/entities/Profile"
import { Currency } from "@/entities/Currency"
import { Country } from "@/entities/Country"
import { userEvent } from "@testing-library/user-event"
import { screen } from "@testing-library/react"
import { profileReducer } from "@/features/editableProfileCard"
import { $api } from "@/shared/api/api"

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 16,
    currency: Currency.USD,
    country: Country.AMERICA,
    city: "Chita",
    username: "holfizz",
}
const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: "1",
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
}

describe("features/EditableProfileCard", () => {
    test("readonly mode must be toggled", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options)
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        )
        expect(
            screen.getByTestId("EditableProfileCardHeader.CancelButton")
        ).toBeInTheDocument()
    })
    test("when canceling, the values should be reset to the original values", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options)
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        )
        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"))

        await userEvent.type(screen.getByTestId("ProfileCard.firstname"), 'user')
        await userEvent.type(screen.getByTestId("ProfileCard.lastname"), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')


        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')

    })
    test("Must check validation", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options)
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        )
        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()

    })
    test("If there are no errors, then a put request should go to the server", async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={"1"} />, options)
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        )
        await userEvent.type(screen.getByTestId("ProfileCard.firstname"),'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
