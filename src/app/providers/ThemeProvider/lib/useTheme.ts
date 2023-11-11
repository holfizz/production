<<<<<<< HEAD
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext"
import {useContext} from "react"
=======
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"
import { useContext } from "react"
>>>>>>> 921c489 (fix all files and add loki)

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
<<<<<<< HEAD
    }
    document.body.className =  theme
=======
        document.body.className = newTheme
    }
>>>>>>> 921c489 (fix all files and add loki)
    return {
        theme,
        toggleTheme,
    }
}
