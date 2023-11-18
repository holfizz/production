import {FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesDetailsPage.module.scss"
import {useTranslation} from "react-i18next"
import {ArticleDetails} from "entitie/Article"
import {useParams} from "react-router-dom"


interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = ({className}) => {

    const {t} = useTranslation("article-details")
    const {id} = useParams<{id:string}>()
    if(!id){
        return <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('article not found')}
        </div>
    }
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    )
}

export default memo(ArticlesDetailsPage)
