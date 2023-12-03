import { profileActions, profileReducer } from "./profileSlice"
import { Currency } from "entity/Currency"
import { Country } from "entity/Country"
import {
    ProfileSchema,
    ValidateProfileErrors,
} from "../types/editableProfileCardSchema"
import { updateProfileData } from "features/editableProfileCard"

const data = {
    first: "Sergey",
    lastname: "Gorlachev",
    age: 16,
    currency: Currency.USD,
    country: Country.AMERICA,
    city: "St. Petersburg",
    username: "admin",
}
describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
        ).toEqual({ readonly: true })
    })
    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = { data }
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly:true,
            validateErrors:undefined,
            data,
            form:data
        })
    })
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }

        expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
          username: '123456',
      }),
        )).toEqual({
            form: { username: '123456' },
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        }

        expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }

        expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        })
    })
})
