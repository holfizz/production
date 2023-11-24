import {createEntityAdapter, createSlice, PayloadAction,} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/StoreProvider"
import {
    ArticleDetailRecommendationsSchema
} from "pages/ArticlesDetailsPage/model/types/ArticleDetailRecommendationsSchema"
import {Article} from "entitie/Article"
import {fetchArticleRecommendations} from "../services/fetchArticleRecommendations/fetchArticleRecommendations"

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
      (state) =>
          state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  )

const articleDetailsPageRecommendations = createSlice({
    name: "articleDetailsPageRecommendation",
    initialState:
    recommendationsAdapter.getInitialState<ArticleDetailRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false
                    recommendationsAdapter.setAll(state, action.payload)
                }
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: articleDetailsPageRecommendationReducer } =
  articleDetailsPageRecommendations
