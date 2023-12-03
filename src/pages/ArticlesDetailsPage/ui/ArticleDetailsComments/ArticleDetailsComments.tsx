import { FC, memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleDetailsComments.module.scss"
import Text, { TextSize } from "shared/ui/Text/Text"
import { AddCommentForm } from "features/AddCommentForm"
import { CommentList } from "entity/Comment"
import { useSelector } from "react-redux"
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice"
import { getArticleCommentsIsLoading } from "../../model/selectors/comments"
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useTranslation } from "react-i18next"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
    ({ className, id }) => {
        const dispatch = useAppDispatch()
        const { t } = useTranslation("article-details")
        const comments = useSelector(getArticleComments.selectAll)
        const isLoading = useSelector(getArticleCommentsIsLoading)
        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text))
            },
            [dispatch]
        )
        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id))
        })
        return (
            <div className={classNames(cls.ArticleDetailsComments, {}, [className])}>
                <Text
                    size={TextSize.L}
                    title={t("Comment")}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        )
    }
)

export default ArticleDetailsComments
