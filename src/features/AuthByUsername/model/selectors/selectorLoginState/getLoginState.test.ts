import {StateSchema} from "app/providers/StoreProvider"
import {getLoginUsername} from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername"

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'User',
            },
        }
        expect(getLoginUsername(state as StateSchema)).toEqual("User")
    })
    test("should word with empty state", () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
