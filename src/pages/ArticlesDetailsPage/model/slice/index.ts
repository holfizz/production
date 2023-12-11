import {combineReducers} from "@reduxjs/toolkit"
import {ArticleDetailsPageSchema} from "../types/index"
import {
    articleDetailsPageRecommendationReducer
} from './articleDetailsPageRecommendations'
import {articleDetailsCommentsReducer} from './articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations:articleDetailsPageRecommendationReducer,
    comments:articleDetailsCommentsReducer,
})
