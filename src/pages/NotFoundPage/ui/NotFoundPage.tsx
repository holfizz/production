import {FC} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./NotFoundPage.module.scss"
import {useTranslation} from "react-i18next"
import {Page} from "widgets/page"


interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({className}) => {
    const { t} = useTranslation()
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </Page>
    )
}

export default NotFoundPage
