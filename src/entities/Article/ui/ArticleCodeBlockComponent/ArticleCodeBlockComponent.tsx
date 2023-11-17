import {FC} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticleCodeBlockComponent.module.scss"
import {useTranslation} from "react-i18next"


interface ArticleCodeBlockComponentProps {
  className?: string;
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({className}) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>

        </div>
    )
}

export default ArticleCodeBlockComponent
