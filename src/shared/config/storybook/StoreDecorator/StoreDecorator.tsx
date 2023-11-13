import {Decorator} from "@storybook/react"
import {StateSchema, StoreProvider} from "app/providers/StoreProvider"

import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice"
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
}

export const StoreDecorator =
  (
      state: DeepPartial<StateSchema>,
      asyncReducers?: ReducersList
  ): Decorator => {
      return (StoryComponent) =>
          (
              <StoreProvider
                  initialState={state}
                  asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
              >
                  <StoryComponent/>
              </StoreProvider>
          )
  }
