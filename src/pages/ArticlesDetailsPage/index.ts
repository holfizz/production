export { fetchArticleRecommendations } from "./model/services/fetchArticleRecommendations/fetchArticleRecommendations"
export { getArticleRecommendationsIsLoading } from "./model/selectors/recommendations"

export { articleDetailsPageReducer } from "./model/slice"

export type { ArticleDetailsPageSchema } from "./model/types/index"
export type { ArticleDetailRecommendationsSchema } from "./model/types/ArticleDetailRecommendationsSchema"
export type { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema"
export { default as ArticlesDetailsPage } from "./ui/ArticlesDetailsPage/ArticlesDetailsPage.async"
