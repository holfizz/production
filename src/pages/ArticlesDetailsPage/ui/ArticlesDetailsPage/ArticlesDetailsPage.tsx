import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticlesDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "entity/Article"
import { useParams } from "react-router-dom"
import DynamicModuleLoader, {
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { Page } from "widgets/page"
import { articleDetailsPageReducer } from "../../model/slice/index"
import ArticlesDetailsPageHeader from "pages/ArticlesDetailsPage/ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader"
import { VStack } from "shared/ui/Stack"
import { ArticleRecommendationsList } from "features/articleRecommendationsList"
import ArticleDetailsComments from "pages/ArticlesDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments"

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation("article-details")
    const { id } = useParams<{ id: string }>()
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
                <VStack gap={'16'}>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
