import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk"
import {Currency} from "entitie/Currency"
import {Country} from "entitie/Country"
import {fetchProfileData} from "entitie/Profile"

const data = {
    first: "Sergey",
    lastname: "Gorlachev",
    age: 16,
    currency: Currency.USD,
    country: Country.AMERICA,
    city: "St. Petersburg",
    username: "admin",
}
describe("fetchProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe("fulfilled")
        expect(result.payload).toEqual(data)

    })

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe("rejected")
    })
})
