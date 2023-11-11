import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./NotFoundPage.module.scss"
import { useTranslation } from "react-i18next"

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({className}) => {
    const { t} = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    )
}

export default NotFoundPage
