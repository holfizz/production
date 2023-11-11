<<<<<<< HEAD
import {StateSchema} from "app/providers/StoreProvider"

export const getLoginPassword = (state: StateSchema) =>
    state?.loginForm?.password || ''
=======
import { StateSchema } from "app/providers/StoreProvider"

export const getLoginPassword = (state: StateSchema) =>
    state?.loginForm?.password
>>>>>>> 921c489 (fix all files and add loki)
