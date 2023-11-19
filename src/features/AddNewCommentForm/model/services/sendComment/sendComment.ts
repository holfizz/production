import {createAsyncThunk} from "@reduxjs/toolkit"
import {getUserAuthData} from "entitie/User"
import {ThunkConfig} from "app/providers/StoreProvider"
import {Comment} from "entitie/Comment"
import {getAddCommentFormText} from "../../selectors/addCommentFormSelectors"
import {getArticleDetailsData} from "entitie/Article"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {addCommentFormAction} from "features/AddNewCommentForm/model/slices/addCommentFormSchema"


export const sendComment = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
// @ts-ignore
>("addCommentForm/sendComment", async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const dispatch = useAppDispatch()
    const userData = getUserAuthData(getState())
    const text = getAddCommentFormText(getState())
    const article = getArticleDetailsData(getState())
    if (!userData || !text || !article) {
        return rejectWithValue("no data")
    }
    try {
        const response = await extra.api.post<Comment>("/comments", {
            articleId: article?.id,
            userId: userData?.id,
            text,
        })
        if (!response.data) {
            throw new Error()
        }
        dispatch(addCommentFormAction.setText(''))
    } catch (e) {
        return rejectWithValue("error")
    }
})
