import {StateSchema} from "app/providers/StoreProvider"
import {ArticleView} from "entitie/Article"


export const getArticlesPageIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageError = (state:StateSchema) => state.articlesPage?.error || undefined
export const getArticlesPageView = (state:StateSchema) => state.articlesPage?.view || ArticleView.SMALL
