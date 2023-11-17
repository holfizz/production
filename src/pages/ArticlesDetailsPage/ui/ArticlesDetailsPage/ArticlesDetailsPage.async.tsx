import {lazy} from "react"

const ArticlesDetailsPageAsync = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./ArticlesDetailsPage"))
            }, 1500)
        }),
)
export default ArticlesDetailsPageAsync
