import {FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesPage.module.scss"
import {useTranslation} from "react-i18next"
import ArticleList from "entitie/Article/ui/ArticleList/ArticleList"
import {ArticleView} from "entitie/Article"

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList isLoading={true} view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    )
}

export default memo(ArticlesPage)
