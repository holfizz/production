import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/StoreProvider"
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from "../../selectors/articlesPageSelectors"
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList"
import {articlesPageActions} from "../../slice/articalPageSlice"

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageIsLoading(getState())
    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1))
        dispatch(
            fetchArticlesList({
                page: page + 1,
            })
        )
    }
})
