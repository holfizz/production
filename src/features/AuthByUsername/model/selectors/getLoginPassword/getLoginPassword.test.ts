import {StateSchema} from "@/app/providers/StoreProvider"
import {getLoginPassword} from "@/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword"

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })
    test("should word with empty state", () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
