import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk"
import {Currency} from "entitie's/Currency"
import {Country} from "entitie's/Country"
import {updateProfileData} from "./updateProfileData"
import {ValidateProfileErrors} from "entitie's/Profile/model/types/profile"

const data = {
    first: "Sergey",
    lastname: "Gorlachev",
    age: 16,
    currency: Currency.USD,
    country: Country.AMERICA,
    city: "St. Petersburg",
    username: "admin",
}
describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile:{
                form:data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe("fulfilled")
        expect(result.payload).toEqual(data)

    })

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile:{
                form:data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe("rejected")
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR])
    })
    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile:{
                form:{...data, lastname:""}
            }
        })
        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe("rejected")
        expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
    })
})
