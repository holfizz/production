import {type FC, memo, useState} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LangSwitcher.module.scss"
import Button, {ButtonSize} from "shared/ui/Button/Button"
import {useTranslation} from "react-i18next"
import {Globe} from "lucide-react"

interface LangSwitcherProps {
  className?: string;
}


const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
    const { i18n } = useTranslation()
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
        setIsActive(true)

        setTimeout(() => {
            setIsActive(false)
        }, 400)
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {  }, [className])}
            onClick={handleClick}
            size={ButtonSize.L}
        >
            <div
                className={classNames(cls.icon, { [cls.active]: isActive }, [className])}
            >
                <Globe />

            </div>
            {i18n.language === 'en' ? 'ru' : 'en'}
        </Button>
    )
})

export default LangSwitcher

