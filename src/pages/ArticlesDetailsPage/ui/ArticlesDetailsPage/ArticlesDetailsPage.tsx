import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticlesDetailsPage.module.scss"
import {useTranslation} from "react-i18next"
import {ArticleDetails} from "entitie/Article"
import {useParams} from "react-router-dom"
import Text, {TextSize} from "shared/ui/Text/Text"
import {CommentList} from "entitie/Comment"
import DynamicModuleLoader, {ReducersList,} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {getArticleComments,} from "../../model/slice/articleDetailsCommentsSlice"
import {useSelector} from "react-redux"
import {getArticleCommentsIsLoading} from "../../model/selectors/comments"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {fetchCommentsByArticleId} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import {AddCommentForm} from "features/AddNewCommentForm"
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle"
import {Page} from "widgets/page"
import {getArticleRecommendations,} from "../../model/slice/articleDetailsPageRecommendations"
import {getArticleRecommendationsIsLoading} from "../../model/selectors/recommendations"
import ArticleList from "entitie/Article/ui/ArticleList/ArticleList"
import {fetchArticleRecommendations} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations"
import {articleDetailsPageReducer} from "../../model/slice/index"
import ArticlesDetailsPageHeader
    from "pages/ArticlesDetailsPage/ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader"

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation("article-details")
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading
    )


    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch]
    )

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommendations())
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
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticlesDetailsPageHeader/>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t("Recommendation")}
                />
                <ArticleList target={'_blank'} className={cls.recommendation}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t("Comment")}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
