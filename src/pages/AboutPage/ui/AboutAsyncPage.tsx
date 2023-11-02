import { lazy } from "react"

const AboutAsyncPage = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./AboutPage"))
            }, 1500)
        }),
)
export default AboutAsyncPage
