import { lazy } from "react"

const ForbiddenPageAsync = lazy(() => import("./ForbiddenPage"))
export default ForbiddenPageAsync
