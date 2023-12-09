import {StateSchema} from "@/app/providers/StoreProvider"
import {getLoginLoading} from "@/features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading"

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })
    test("should word with empty state", () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})
