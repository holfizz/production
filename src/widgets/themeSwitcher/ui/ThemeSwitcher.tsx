import type { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import { Theme, useTheme } from "app/providers/ThemeProvider"
import { CSSTransition } from "react-transition-group"
import Button from "shared/ui/Button/Button"
import { Moon, Sun } from "lucide-react"

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
                in={theme === Theme.DARK}
                timeout={300}
                unmountOnExit
                classNames={{
                    enter: cls.sunMoonEnter,
                    enterActive: cls.sunMoonEnterActive,
                    exit: cls.sunMoonExit,
                    exitActive: cls.sunMoonExitActive,
                }}
            >
                <Moon />
            </CSSTransition>
            <CSSTransition
                in={theme === Theme.LIGHT}
                timeout={400}
                unmountOnExit
                classNames={{
                    enter: cls.sunMoonEnter,
                    enterActive: cls.sunMoonEnterActive,
                    exit: cls.sunMoonExit,
                    exitActive: cls.sunMoonExitActive,
                }}
            >
                <Sun />
            </CSSTransition>
        </Button>
    )
}

export default ThemeSwitcher
