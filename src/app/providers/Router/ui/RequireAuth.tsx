import { useSelector } from "react-redux"
import { getUserAuthData, getUserRoles, UserRole } from "@/entities/User"
import { Navigate, useLocation } from "react-router-dom"
import { ReactNode, useMemo } from "react"
import { getRouteForbidden, getRouteMain } from "@/shared/const/router"

interface RequireAuthProps {
  children: ReactNode;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    let auth = useSelector(getUserAuthData)
    let location = useLocation()
    const userRoles = useSelector(getUserRoles)
    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true
        }
        return roles.some((requireRole) => {
            return userRoles?.includes(requireRole)
        })
    }, [roles, userRoles])

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />
    }
    if (!hasRequireRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}
