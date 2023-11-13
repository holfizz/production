import {lazy} from "react"

const MainPageAsync = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./MainPage"))
            }, 1500)
        }),
)
export default MainPageAsync
