import { useTranslation } from "react-i18next"
import cls from "./ArticleRecommendationsList.module.scss"
import { memo } from "react"
import Text, { TextSize } from "@/shared/ui/Text/Text"
import { ArticleList } from "@/entities/Article"
import { useSelector } from "react-redux"
import {
    fetchArticleRecommendations,
    getArticleRecommendationsIsLoading,
} from "@/pages/ArticlesDetailsPage"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useGetArticleRecommendationListQuery } from "../../api/articleRecommendationsApi"
import { classNames } from "@/shared/lib/classNames/classNames"

interface ArticleRecommendationsListProps {
  className?: string;
}


export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props
        const { t } = useTranslation()
        const recommendationsIsLoading = useSelector(
            getArticleRecommendationsIsLoading
        )
        const dispatch = useAppDispatch()
        useInitialEffect(()=>{
            dispatch(fetchArticleRecommendations())

        })
        const {data:articles, isLoading,error} = useGetArticleRecommendationListQuery(3)

        if(isLoading || error || !articles){
            return null
        }
        return (
            <div className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t("Recommendation")}
                />
                <ArticleList
                    target={"_blank"}
                    className={cls.recommendation}
                    articles={articles}
                    isLoading={recommendationsIsLoading}
                />
            </div>
        )
    }
)
