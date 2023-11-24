import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesPageFilters.module.scss"
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from "entitie/Article"
import {articlesPageActions} from "pages/ArticlesPage/model/slice/articalPageSlice"
import {useSelector} from "react-redux"
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {useTranslation} from "react-i18next"
import Card from "shared/ui/Card/Card"
import Input, {InputSize, InputTheme} from "shared/ui/Input/Input"
import {SortOrder} from "shared/types"
import {fetchArticlesList} from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList"
import {useDebounce} from "shared/lib/hooks/useDebounce/useDebounce"
import {ArticleType} from "entitie/Article/model/types/article"

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
    ({ className }) => {
        const dispatch = useAppDispatch()
        const { t } = useTranslation()

        const view = useSelector(getArticlesPageView)
        const sort = useSelector(getArticlesPageSort)
        const order = useSelector(getArticlesPageOrder)
        const search = useSelector(getArticlesPageSearch)
        const type = useSelector(getArticlesPageType)



        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }))
        }, [dispatch])
        const debounceFetchData = useDebounce(fetchData, 500)

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view))
            },
            [dispatch]
        )

        const onChangeSort = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(newSort))
                dispatch(articlesPageActions.setPage(1))
                fetchData()
            },
            [dispatch, fetchData]
        )

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlesPageActions.setOrder(newOrder))
                dispatch(articlesPageActions.setPage(1))
                fetchData()
            },
            [dispatch, fetchData]
        )
        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlesPageActions.setSearch(search))
                dispatch(articlesPageActions.setPage(1))
                debounceFetchData()
            },
            [debounceFetchData, dispatch]
        )
        const onChangeType = useCallback(
            (value:ArticleType) => {
                dispatch(articlesPageActions.setType(value))
                dispatch(articlesPageActions.setPage(1))
                debounceFetchData()
            },
            [debounceFetchData, dispatch]
        )
        return (
            <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector  onViewClick={onChangeView} view={view} />
                </div>
                <Card className={cls.search}>
                    <Input
                        value={search}
                        onChange={onChangeSearch}
                        theme={InputTheme.CLEAR}
                        size={InputSize.FULL}
                        placeholder={t("Search")}
                    />
                </Card>
                <ArticleTypeTabs className={cls.tabs} onChangeType={onChangeType} value={type}/>
            </div>
        )
    }
)

export default ArticlesPageFilters
