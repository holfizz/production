import {createEntityAdapter, createSlice, PayloadAction,} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/StoreProvider"
import {Article, ArticleView} from "entitie/Article"
import {ArticlePageSchema} from "../types/articlePageSchema"
import {fetchArticlesList} from "../service/fetchArticlesList"
import {ARTICLE_LOCALSTORAGE_KEY} from "shared/const/localStorage"

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_LOCALSTORAGE_KEY, action.payload)
        },
        initState: (state) => {
            state.view = localStorage.getItem(
                ARTICLE_LOCALSTORAGE_KEY
            ) as ArticleView
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false
                    articlesAdapter.setAll(state, action.payload)
                }
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice
