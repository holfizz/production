import {lazy} from "react"

const ProfileAsyncPage = lazy(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore
                res(import("./ProfilePage"))
            }, 1500)
        }),
)
export default ProfileAsyncPage
