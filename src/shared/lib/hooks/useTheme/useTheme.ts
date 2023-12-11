import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import { Theme } from "../../../const/theme"
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localStorage"

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    if(theme){
        document.body.className = theme
    }
    return {
        theme:theme||Theme.LIGHT,
        toggleTheme,
    }
}
