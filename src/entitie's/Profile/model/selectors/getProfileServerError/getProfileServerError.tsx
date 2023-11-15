import {StateSchema} from "app/providers/StoreProvider"

export const getProfileServerError = (state:StateSchema) =>state.profile?.error || undefined
