import {FC, memo, useEffect} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticleDetails.module.scss"
import {useTranslation} from "react-i18next"
import DynamicModuleLoader, {ReducersList,} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {articlesDetailsReducer} from "../../model/slice/artliDetailsSlice"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {fetchArticleById} from "entities/Article"
import {useSelector} from "react-redux"
import {
    getArticleDetailError,
    getArticleDetailsData,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails"
import Text, {TextAlign, TextTheme} from "shared/ui/Text/Text"
import Skeleton from "shared/ui/Skeleton/Skeleton"

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
    articleDetails: articlesDetailsReducer,
}
const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailError)
    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])
    let content
    if (isLoading) {
        content = <div>loading...</div>
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t("an error occurred while loading the page")}
            ></Text>
        )
    } else {
        content = <div>
            <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}></Skeleton>
            <Skeleton className={cls.title} width={300} height={32} border={'10px'}></Skeleton>
            <Skeleton className={cls.title} width={600} height={32} border={'10px'}></Skeleton>
            <Skeleton className={cls.skeleton} width={'100%'} height={200} border={'18px'}></Skeleton>
            <Skeleton className={cls.skeleton} width={'100%'} height={200} border={'18px'}></Skeleton>
        </div>
    }
    return (
        <DynamicModuleLoader reducer={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
export default ArticleDetails
