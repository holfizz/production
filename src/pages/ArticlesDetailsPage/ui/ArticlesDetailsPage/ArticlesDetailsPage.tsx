import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesDetailsPage.module.scss"
import {useTranslation} from "react-i18next"
import {ArticleDetails} from "entitie/Article"
import {useNavigate, useParams} from "react-router-dom"
import Text, {TextSize} from "shared/ui/Text/Text"
import {CommentList} from "entitie/Comment"
import DynamicModuleLoader, {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {articleDetailsCommentsReducer, getArticleComments} from "../../model/slice/articleDetailsCommentsSlice"
import {useSelector} from "react-redux"
import {getArticleCommentsIsLoading} from "../../model/selectors/comments"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {fetchCommentsByArticleId} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import {AddCommentForm} from "features/AddNewCommentForm"
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle"
import Button, {ButtonTheme} from "shared/ui/Button/Button"
import {RouterPath} from "shared/config/routeConfig/routeConfig"

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
    const navigate = useNavigate()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

    const backToList = useCallback(()=>{
        navigate(RouterPath.articles)
    },[navigate])


    const onSendComment= useCallback((text:string)=>{
        dispatch(addCommentForArticle(text))
    },[dispatch])


    useInitialEffect(()=>{
        dispatch(fetchCommentsByArticleId(id))
    })
    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t("article not found")}
            </div>
        )
    }
    return (
        <DynamicModuleLoader reducer={reducers}>
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.FILL} onClick={backToList}>{t("Back to list")}</Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t("Comment")}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
