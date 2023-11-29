import {FC, lazy} from "react"
import {AddCommentFormProps} from "./AddCommentForm"

const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./AddCommentForm"))
            }, 1500)
        })
)
export default AddCommentFormAsync
