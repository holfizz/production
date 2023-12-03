import { StateSchema } from "app/providers/StoreProvider"
import { getProfileError } from "./getProfileError"

describe("getProfileError.test", () => {
    test("error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error",
            },
        }
        expect(getProfileError(state as StateSchema)).toEqual("error")
    })
    test("should word with empty error", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
