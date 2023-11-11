<<<<<<< HEAD
import type {FC} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import {Theme, useTheme} from "app/providers/ThemeProvider"
import {CSSTransition} from "react-transition-group"
import Button from "shared/ui/Button/Button"
import {Moon, Sun} from "lucide-react"
=======
import type { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import { Theme, useTheme } from "app/providers/ThemeProvider"
import { CSSTransition } from "react-transition-group"
import Button from "shared/ui/Button/Button"
import { Moon, Sun } from "lucide-react"
>>>>>>> 921c489 (fix all files and add loki)

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
<<<<<<< HEAD
                in={!!theme}
                timeout={400}
                mountOnEnter
=======
                in={theme === Theme.DARK}
                timeout={300}
>>>>>>> 921c489 (fix all files and add loki)
                unmountOnExit
                classNames={{
                    enter: cls.sunMoonEnter,
                    enterActive: cls.sunMoonEnterActive,
                    exit: cls.sunMoonExit,
                    exitActive: cls.sunMoonExitActive,
                }}
            >
<<<<<<< HEAD
                {theme === Theme.DARK ? <Sun /> : <Moon />}
=======
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
>>>>>>> 921c489 (fix all files and add loki)
            </CSSTransition>
        </Button>
    )
}

export default ThemeSwitcher
