import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AddCommentFormSchema } from "features/AddCommentForm"

const initialState: AddCommentFormSchema = {
    text: "",
    error: undefined,
}

export const addCommentFormSlice = createSlice({
    name: "addCommentFormSchema",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
    // extraReducers: (builder) => {
    // builder
    //     .addCase(loginByUsername.pending, (state) => {
    //         state.error = undefined
    //         state.isLoading = true
    //     })
    //     .addCase(loginByUsername.fulfilled, (state) => {
    //         state.isLoading = false
    //     })
    //     .addCase(loginByUsername.rejected, (state, action) => {
    //         state.isLoading = false
    //         state.error = action.payload
    //     })
    // },
})

export const { actions: addCommentFormAction } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
