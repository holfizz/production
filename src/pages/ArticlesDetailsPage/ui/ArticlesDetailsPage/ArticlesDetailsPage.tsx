import {FC, memo, useEffect} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesDetailsPage.module.scss"
import {useTranslation} from "react-i18next"
import {ArticleDetails} from "entitie/Article"
import {useParams} from "react-router-dom"
import Text, {TextSize} from "shared/ui/Text/Text"
import {CommentList} from "entitie/Comment"
import DynamicModuleLoader, {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {articleDetailsCommentsReducer, getArticleComments} from "../../model/slice/articleDetailsCommentsSlice"
import {useSelector} from "react-redux"
import {getArticleCommentsIsLoading} from "../../model/selectors/comments"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {fetchCommentsByArticleId} from "pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId"

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers:ReducersList ={
    articleDetailsComments:articleDetailsCommentsReducer
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation("article-details")
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

    useInitialEffect(()=>{
        dispatch(fetchCommentsByArticleId(id))
    })
    useEffect(() => {
        console.log(comments)
    }, [comments])
    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t("article not found")}
            </div>
        )
    }
    return (
        <DynamicModuleLoader reducer={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t("Comment")}
                />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)