import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/user'
import {JsonSettings} from '../types/jsonSettings'
import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localStorage"
import {saveJsonSettings} from '../..'
import {setFeaturesFlag} from "@/shared/lib/features"

const initialState: UserSchema = {
    _mounted: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            setFeaturesFlag(action.payload.features)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                const json = JSON.parse(user) as User
                state.authData = json
                setFeaturesFlag(json.features)
            }
            state._mounted = true
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload
                }
            },
        )
    },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
