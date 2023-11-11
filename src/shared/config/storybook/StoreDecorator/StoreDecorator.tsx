import { Decorator } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
}

export const StoreDecorator =
  (
      state: DeepPartial<StateSchema>,
      asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ): Decorator =>
  // eslint-disable-next-line react/display-name
      (StoryComponent) =>
          (
              <StoreProvider
                  initialState={state}
                  asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
              >
                  <StoryComponent />
              </StoreProvider>
          )
