import { Currency } from "entity/Currency"
import { Country } from "entity/Country"
import { validateProfileData } from "./validateProfileData"

import { ValidateProfileErrors } from "features/editableProfileCard/model/const/const"

const data = {
    first: "Sergey",
    lastname: "Gorlachev",
    age: 16,
    currency: Currency.USD,
    country: Country.AMERICA,
    city: "St. Petersburg",
    username: "admin",
}
describe("validateProfileData.test", () => {
    test("success", async () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })
    test("without first adn lastname", async () => {
        const result = validateProfileData({ ...data, first: "", lastname: "" })

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
    })
    test("incorrect age", async () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE])
    })
    test("incorrect country", async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTY])
    })
    test("incorrect all", async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTY,
        ])
    })
})
