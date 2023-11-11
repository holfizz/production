import { FC, lazy } from "react"
import { LoginFormProps } from "./LoginForm"

const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./LoginForm"))
            }, 1500)
        })
)
export default LoginFormAsync
