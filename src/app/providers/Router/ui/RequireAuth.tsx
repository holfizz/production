import {useSelector} from "react-redux"
import {getUserAuthData} from "entity/User"
import {Navigate, useLocation} from "react-router-dom"
import {RouterPath} from "shared/config/routeConfig/routeConfig"
import {ReactNode} from "react"

export function RequireAuth({ children }: { children: ReactNode }) {
    let auth = useSelector(getUserAuthData)
    let location = useLocation()

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />
    }
    return children
}
