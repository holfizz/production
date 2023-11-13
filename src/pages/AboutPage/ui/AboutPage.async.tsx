import {lazy} from "react"

const AboutPageAsync = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./AboutPage"))
            }, 1500)
        }),
)
export default AboutPageAsync
