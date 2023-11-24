import {Story} from '@storybook/react'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice'
import {profileReducer} from 'entitie/Profile'
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articlesDetailsReducer} from "entitie/Article/model/slice/artliDetailsSlice"
import {addCommentFormReducer} from "features/AddNewCommentForm/model/slices/addCommentFormSchema"
import {articleDetailsPageReducer} from "pages/ArticlesDetailsPage/model/slice"

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articlesDetailsReducer,
    addCommentForm:addCommentFormReducer,
    articleDetailsPage:articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
