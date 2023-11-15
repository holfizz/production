import {type FC, memo, Suspense, useMemo} from "react"
import {Route, Routes} from "react-router-dom"
import {routeConfig} from "shared/config/routeConfig/routeConfig"
import {PageLoader} from "widgets/pageLoader"
import {useSelector} from "react-redux"
import {getUserAuthData} from "entitie's/User"

const AppRouter: FC = () => {
    const isAuth  = useSelector(getUserAuthData)
    const routes = useMemo(()=>{
        return Object.values(routeConfig).filter(route=>{
            if(route.authOnly && !isAuth) {
                return false
            }
            return true
        })
    },[isAuth])
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        element={<div className={"pageWrapper"}>{element}</div>}
                        key={path}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
