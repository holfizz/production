import {type FC, memo, Suspense, useCallback} from "react"
import {Route, Routes} from "react-router-dom"
import {AppRoutesProps, routeConfig} from "shared/config/routeConfig/routeConfig"
import {RequireAuth} from "./RequireAuth"
import {PageLoader} from "widgets/pageLoader"

const AppRouter: FC = () => {
    const renderWithWrapper = useCallback((route:AppRoutesProps)=>{
        const element = (
            <>
                {route.element}
            </>

        )
        return(
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    },[])
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
