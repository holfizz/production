import {StateSchema} from "app/providers/StoreProvider"
import {getProfileForm} from "entitie's/Profile"
import {Currency} from "entitie's/Currency"
import {Country} from "entitie's/Country"

describe("getProfileForm.test", () => {
    test("form", () => {
        const data ={
            first: "Sergey",
            lastname: "Gorlachev",
            age: 16,
            currency: Currency.USD,
            country: Country.AMERICA,
            city: "St. Petersburg",
            username: "admin",
        }
        const state: DeepPartial<StateSchema> = {
            profile:{
                form:data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test("should word with empty state", () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
