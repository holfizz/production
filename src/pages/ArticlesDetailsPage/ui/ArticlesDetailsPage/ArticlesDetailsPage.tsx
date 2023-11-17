import {FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesDetailsPage.module.scss"
import {useTranslation} from "react-i18next"


interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = ({className}) => {

    const {t} = useTranslation("article")

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            ARTICLES DETAILS PAGE
        </div>
    )
}

export default memo(ArticlesDetailsPage)
