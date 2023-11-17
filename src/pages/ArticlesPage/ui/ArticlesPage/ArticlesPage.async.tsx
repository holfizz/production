import {lazy} from "react"

const ArticlesPageAsync = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./ArticlesPage"))
            }, 1500)
        }),
)
export default ArticlesPageAsync
