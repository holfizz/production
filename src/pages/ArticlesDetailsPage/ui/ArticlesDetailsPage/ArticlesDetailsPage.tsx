import {FC, memo} from "react"
import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./ArticlesDetailsPage.module.scss"
import {useTranslation} from "react-i18next"
import {ArticleDetails} from "@/entities/Article"
import {useParams} from "react-router-dom"
import DynamicModuleLoader, {ReducersList,} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {Page} from "@/widgets/page"
import {articleDetailsPageReducer} from "../../model/slice/index"
import ArticlesDetailsPageHeader from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader'
import {VStack} from "@/shared/ui/Stack"
import {ArticleRecommendationsList} from "@/features/articleRecommendationsList"
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'
import {ArticleRating} from "@/features/articleRating"
import {getFeatureFlag} from "@/shared/lib/features"

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation("article-details")
    const { id } = useParams<{ id: string }>()
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled')
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
                <VStack max gap={'16'}>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isArticleRatingEnabled && <ArticleRating articleId={id}/>}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
