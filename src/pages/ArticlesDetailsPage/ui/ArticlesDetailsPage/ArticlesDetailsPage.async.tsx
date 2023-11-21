import {lazy} from "react"

const ArticlesDetailsPageAsync = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./ArticlesDetailsPage"))
            }, 400)
        }),
)
export default ArticlesDetailsPageAsync
