import { FC, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { RatingCard } from "@/entities/Rating"
import {
    useGetArticleRating,
    useRateArticle,
} from "../../api/articleRatingApi"
import { useSelector } from "react-redux"
import { getUserAuthData } from "@/entities/User"
import Skeleton from "@/shared/ui/Skeleton/Skeleton"

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo(
    ({ className, articleId }) => {
        const { t } = useTranslation()
        const userData = useSelector(getUserAuthData)
        const { data, isLoading } = useGetArticleRating({
            articleId,
            userId: userData?.id ?? "",
        })
        const [rateArticleMutation, {}] = useRateArticle({})

        const rating = data?.[0]

        const handleRateArticle = useCallback(
            (starCount: number, feedback?: string) => {
                try {
                    rateArticleMutation({
                        userId: userData?.id ?? "",
                        articleId,
                        rate: starCount,
                        feedback: feedback,
                    })
                } catch (e) {
                    console.log(e)
                }
            },
            [articleId, rateArticleMutation, userData?.id]
        )
        const onAccept = useCallback((starCount: number, feedback?: string) => {
            handleRateArticle(starCount, feedback)
        },
        [handleRateArticle])
        const onCancel = useCallback((starCount: number, feedback?: string) => {
            handleRateArticle(starCount)
        },
        [handleRateArticle])
        if (isLoading) {
            return <Skeleton width={"100%"} height={120} border={"16"} />
        }

        return (
            <RatingCard
                onAccept={onAccept}
                onCancel={onCancel}
                rate={rating?.rate}
                className={className}
                title={t("Rate this article")}
                feedbackTitle={t(
                    "Leave feedback on the article, this will help improve the quality"
                )}
                hasFeedback
            />
        )
    }
)

export default ArticleRating
