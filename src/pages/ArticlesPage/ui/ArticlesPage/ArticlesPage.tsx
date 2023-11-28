import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesPage.module.scss"
import {useTranslation} from "react-i18next"
import ArticleList from "entity/Article/ui/ArticleList/ArticleList"
import DynamicModuleLoader, {ReducersList,} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {articlesPageReducer, getArticles,} from "../../model/slice/articalPageSlice"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {useSelector} from "react-redux"
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import {Page} from "widgets/page"

import {fetchNextArticlesPage} from "../../model/service/fetchNextArticlesPage/fetchNextArticlesPage"
import Text, {TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import {initArticlesPage} from "../../model/service/initArticlesPage/initArticlesPage"
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters"
import {useSearchParams} from "react-router-dom"

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)
    const [ searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    if (error) {
        return (
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    size={TextSize.XL}
                    title={t("Error loading article")}
                    text={t("Try refreshing the page")}
                />
            </Page>
        )
    }
    return (
        <DynamicModuleLoader  removeAfterUnmount={false} reducer={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters/>
                <ArticleList className={cls.list} isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
