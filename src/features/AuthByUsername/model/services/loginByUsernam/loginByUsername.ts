import {AnyAction, createAsyncThunk, ThunkDispatch} from "@reduxjs/toolkit"
import axios from "axios"
import {USER_LOCALSTORAGE_KEY} from "shared/const/localStorage"
<<<<<<< HEAD
import {User, userActions} from "entitie's/User"

export interface LoginByUsernameProps {
=======
import {User, userActions} from "entitie\'s/User"

interface LoginByUsernameProps {
>>>>>>> 921c489 (fix all files and add loki)
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
<<<<<<< HEAD
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                "http://localhost:8000/login",
                authData
            )
=======
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
>>>>>>> 921c489 (fix all files and add loki)

            if (!response.data) {
                throw new Error()
            }
<<<<<<< HEAD
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data)
            )
=======
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
>>>>>>> 921c489 (fix all files and add loki)
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            console.log(e)
<<<<<<< HEAD
            return thunkAPI.rejectWithValue("error")
        }
    }
=======
            return thunkAPI.rejectWithValue('error')
        }
    },
>>>>>>> 921c489 (fix all files and add loki)
)

export type AppDispatch = ThunkDispatch<LoginByUsernameProps, null, AnyAction>;
