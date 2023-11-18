import {StateSchema} from "app/providers/StoreProvider"
import {getProfileReadonly} from "entitie/Profile"

describe("getProfileReadonly.test", () => {
    test("readonly", () => {
        const state: DeepPartial<StateSchema> = {
            profile:{
                readonly:true
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })
    test("should word with empty error", () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(false)
    })
})
