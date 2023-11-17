import {StateSchema} from "app/providers/StoreProvider"
import {getProfileData} from "entities/Profile"
import {Currency} from "entities/Currency"
import {Country} from "entities/Country"

describe("getProfileData.test", () => {
    test("data", () => {
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
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test("should word with empty state", () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
