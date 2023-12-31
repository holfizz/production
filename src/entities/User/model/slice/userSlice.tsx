import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localStorage"
import {saveJsonSettings} from "../services/saveJsonSettings"
import {setFeaturesFlag} from "@/shared/lib/features"
import {JsonSettings} from "../types/jsonSettings"
import {User, UserSchema} from "../types/user"

const initialState: UserSchema = {
    _mounted:false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData:(state, action:PayloadAction<User>)=>{
            state.authData = action.payload
            setFeaturesFlag(action.payload.features)
        },
        initAuthData:(state)=>{
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if(user){
                const jsonUser = JSON.parse(user) as User
                state.authData = jsonUser
                setFeaturesFlag(jsonUser.features)
            }

            state._mounted = true
        },
        logout: (state)=>{
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, {payload}: PayloadAction<JsonSettings>) => {
                    if(state.authData){
                        state.authData.jsonSettings = payload

                    }
                }
            )
    }
})

export const { actions:userActions } = userSlice
export const { reducer:userReducer } = userSlice

