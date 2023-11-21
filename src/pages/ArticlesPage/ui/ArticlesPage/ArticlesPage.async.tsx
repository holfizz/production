import {lazy} from "react"

const ArticlesPageAsync = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./ArticlesPage"))
            }, 400)
        }),
)
export default ArticlesPageAsync
