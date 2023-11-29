import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/StoreProvider"
import {Profile, ValidateProfileErrors} from "../../types/profile"
import {getProfileForm} from "entity/Profile"
import {validateProfileData} from "../../services/validateProfileData/validateProfileData"

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    const errors = validateProfileData(formData)
    if (errors?.length) {
        return rejectWithValue(errors)
    }

    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        )
        if (!response.data) {
            throw new Error()
        }
        return response.data
    } catch (e) {
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
    }
})