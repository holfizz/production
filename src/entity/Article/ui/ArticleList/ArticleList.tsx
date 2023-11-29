import {FC, HTMLAttributeAnchorTarget, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticleList.module.scss"
import {Article, ArticleView} from "../../model/types/article"
import ArticleListItem from "../ArticleListItem/ArticleListItem"
import ArticleListItemSkeleton from "entity/Article/ui/ArticleListItem/ArticleListItemSkeleton"
import Text, {TextSize} from "shared/ui/Text/Text"
import {useTranslation} from "react-i18next"

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ))
}

const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props
    const { t } = useTranslation()
    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                target={target}
                key={article.id}
                className={cls.card}
                article={article}
                view={view}
            />
        )
    }
    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t("Article not found")} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
})

export default ArticleList