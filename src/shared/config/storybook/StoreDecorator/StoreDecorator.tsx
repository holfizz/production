import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { profileReducer } from "features/editableProfileCard"
import { loginReducer } from "features/AuthByUsername"
import { articleDetailsPageReducer } from "pages/ArticlesDetailsPage"
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { addCommentFormReducer } from "features/AddCommentForm"
import { articlesDetailsReducer } from "entity/Article"

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    articleDetails: articlesDetailsReducer,
    profile: profileReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
