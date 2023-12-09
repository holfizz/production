import { FC, memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./ArticleInfinityList.module.scss"
import { useTranslation } from "react-i18next"
import ArticleList from "@/entities/Article/ui/ArticleList/ArticleList"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import { getArticles } from "@/pages/ArticlesPage/model/slice/articalPageSlice"
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "@/pages/ArticlesPage/model/selectors/articlesPageSelectors"
import { useSearchParams } from "react-router-dom"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect"
import { initArticlesPage } from "@/pages/ArticlesPage/model/service/initArticlesPage/initArticlesPage"
import Text, { TextAlign, TextSize, TextTheme } from "@/shared/ui/Text/Text"

interface ArticleInfinityListProps {
  className?: string;
}

const ArticleInfinityList: FC<ArticleInfinityListProps> = memo(
    ({ className }) => {
        const { t } = useTranslation()

        const dispatch = useAppDispatch()
        const articles = useSelector(getArticles.selectAll)
        const isLoading = useSelector(getArticlesPageIsLoading)
        const view = useSelector(getArticlesPageView)
        const [searchParams] = useSearchParams()

        useInitialEffect(() => {
            dispatch(initArticlesPage(searchParams))
        })
        const error = useSelector(getArticlesPageError)
        if (error) {
            return (
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    size={TextSize.L}
                    title={t("Error loading article")}
                    text={t("Try refreshing the page")}
                />
            )
        }

        return (
            <div className={classNames(cls.ArticleInfinityList, {}, [className])}>
                <ArticleList
                    className={className}
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        )
    }
)

export default ArticleInfinityList
