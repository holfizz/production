import { type FC, Suspense } from "react"
import "./styles/index.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/Router"
import { Navbar } from "widgets/navbar"
import { useTheme } from "app/providers/ThemeProvider"
import { Sidebar } from "widgets/sidebar"

const App: FC = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <div className={"appContent"}>
                <Suspense fallback={""}>
                    <Navbar />
                    <div className={"contentPage"}>
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default App
