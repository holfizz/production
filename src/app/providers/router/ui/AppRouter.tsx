import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        element={<div className={'pageWrapper'}>{element}</div>}
                        key={path}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
