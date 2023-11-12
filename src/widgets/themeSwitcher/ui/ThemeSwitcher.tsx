import type {FC} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import {Theme, useTheme} from "app/providers/ThemeProvider"
import {CSSTransition} from "react-transition-group"
import Button from "shared/ui/Button/Button"
import {Moon, Sun} from "lucide-react"

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <CSSTransition
                in={!!theme}
                timeout={400}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter: cls.sunMoonEnter,
                    enterActive: cls.sunMoonEnterActive,
                    exit: cls.sunMoonExit,
                    exitActive: cls.sunMoonExitActive,
                }}
            >
                {theme === Theme.DARK ? <Sun /> : <Moon />}
            </CSSTransition>
        </Button>
    )
}

export default ThemeSwitcher
