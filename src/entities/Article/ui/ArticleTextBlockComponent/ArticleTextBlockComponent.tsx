import {FC} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticleTextBlockComponent.module.scss"
import {useTranslation} from "react-i18next"


interface ArticleTextBlockComponentProps {
  className?: string;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({className}) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>

        </div>
    )
}

export default ArticleTextBlockComponent
