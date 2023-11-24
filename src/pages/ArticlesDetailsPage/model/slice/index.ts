import {combineReducers} from "@reduxjs/toolkit"
import {ArticleDetailsPageSchema} from "../types/index"
import {
    articleDetailsPageRecommendationReducer
} from "pages/ArticlesDetailsPage/model/slice/articleDetailsPageRecommendations"
import {articleDetailsCommentsReducer} from "pages/ArticlesDetailsPage/model/slice/articleDetailsCommentsSlice"

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations:articleDetailsPageRecommendationReducer,
    comments:articleDetailsCommentsReducer,
})
