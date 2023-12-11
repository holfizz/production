import type { FC } from "react"
import { memo, useEffect, useState } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import { CSSTransition } from "react-transition-group"
import Button from "@/shared/ui/Button/Button"
import { Moon, Sun } from "lucide-react"
import { Theme } from "@/shared/const/theme"
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme"

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()
    const [themeSwitch, setThemeSwitch] = useState<boolean>(false)
    useEffect(() => {
        setThemeSwitch((prevState) => !prevState)
    }, [theme])
    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <CSSTransition
                in={themeSwitch}
                timeout={400}
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
})

export default ThemeSwitcher
