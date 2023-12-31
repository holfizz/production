import {type FC, Suspense, useEffect} from "react"
import {classNames} from "@/shared/lib/classNames/classNames"
import {AppRouter} from "./providers/Router"
import {Navbar} from "@/widgets/navbar"
import {Sidebar} from "@/widgets/sidebar"
import {useDispatch, useSelector} from "react-redux"
import {getUserMounted, userActions} from "@/entities/User"

const App: FC = () => {
    const dispatch = useDispatch()
    const mounted = useSelector(getUserMounted)
    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])
    return (
        <div className={classNames("app", {}, [])}>
            <div className={"appContent"}>
                <Suspense fallback={""}>
                    <Navbar />
                    <div className={"contentPage"}>
                        <Sidebar />
                        {mounted && <AppRouter />}
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default App
