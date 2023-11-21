import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesPage.module.scss"
import {useTranslation} from "react-i18next"
import ArticleList from "entitie/Article/ui/ArticleList/ArticleList"
import DynamicModuleLoader, {ReducersList,} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {articlesPageActions, articlesPageReducer, getArticles,} from "../../model/slice/articalPageSlice"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {fetchArticlesList} from "../../model/service/fetchArticlesList"
import {useSelector} from "react-redux"
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import {ArticleView, ArticleViewSelector} from "entitie/Article"

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

    const onChangeView = useCallback((view:ArticleView)=>{
        dispatch(articlesPageActions.setView(view))
        console.log(view)
    },[dispatch])

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlesPageActions.initState())
    })

    return (
        <DynamicModuleLoader  reducer={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector onViewClick={onChangeView} view={view}/>
                <ArticleList isLoading={isLoading } view={view} articles={articles} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
