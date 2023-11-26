import {lazy} from "react"

const ArticleEditPageAsync = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./ArticleEditPage"))
            }, 400)
        }),
)
export default ArticleEditPageAsync
