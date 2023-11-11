import { lazy } from "react"

const MainAsyncPage = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./MainPage"))
            }, 1500)
        }),
)
export default MainAsyncPage
