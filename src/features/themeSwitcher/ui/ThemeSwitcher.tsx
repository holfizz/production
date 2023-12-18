import {FC, memo, useCallback, useEffect, useState} from "react"
import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import {CSSTransition} from "react-transition-group"
import Button from "@/shared/ui/Button/Button"
import {Moon, Sun} from "lucide-react"
import {Theme} from "@/shared/const/theme"
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme"
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import {saveJsonSettings} from "@/entities/User"

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()
    const [themeSwitch, setThemeSwitch] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setThemeSwitch((prevState) => !prevState)
    }, [theme])
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }))
        })
    }, [dispatch, toggleTheme])
    return (
        <Button
            onClick={onToggleHandler}
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
