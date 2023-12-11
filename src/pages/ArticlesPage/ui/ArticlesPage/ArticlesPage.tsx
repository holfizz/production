import { FC, memo, useCallback } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./ArticlesPage.module.scss"
import DynamicModuleLoader, {
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { articlesPageReducer } from "../../model/slice/articalPageSlice"
import { Page } from "@/widgets/page"
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters"
import { fetchNextArticlesPage } from '../../model/service/fetchNextArticlesPage/fetchNextArticlesPage'
import ArticleInfinityList from "../ArticleInfinityList/ArticleInfinityList"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducer={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfinityList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
