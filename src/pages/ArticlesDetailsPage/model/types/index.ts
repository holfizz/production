import {ArticleDetailRecommendationsSchema} from "./ArticleDetailRecommendationsSchema"
import {ArticleDetailsCommentsSchema} from "./ArticleDetailsCommentsSchema"

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailRecommendationsSchema;
}
