import { StateSchema } from "@/app/providers/StoreProvider"

import { getProfileValidateErrors } from "./getProfileValidateErrors"
import { ValidateProfileErrors } from '../../const/const'

describe("getProfileValidateErrors.test", () => {
    test("validateErrors", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.NO_DATA,
                ],
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.NO_DATA,
        ])
    })
    test("should word with empty error", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
