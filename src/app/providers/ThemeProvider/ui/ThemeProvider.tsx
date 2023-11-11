<<<<<<< HEAD
import {type FC, type PropsWithChildren, useMemo, useState} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext,} from "app/providers/ThemeProvider/lib/ThemeContext"
=======
import { type FC, type PropsWithChildren, useMemo, useState } from "react"
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "app/providers/ThemeProvider/lib/ThemeContext"
>>>>>>> 921c489 (fix all files and add loki)

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

interface ThemeProviderProps {
  initialTheme?: Theme;
}
const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
    children,
    initialTheme,
}) => {
<<<<<<< HEAD
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme )
=======
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

>>>>>>> 921c489 (fix all files and add loki)
    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    )
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
