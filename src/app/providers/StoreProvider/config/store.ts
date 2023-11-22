import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit"
import {StateSchema, ThunkExtraArg} from "./StateSchema"
import {counterReducer} from "entitie/Counter"
import {userReducer} from "entitie/User"
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager"
import {$api} from "shared/api/api"

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg:ThunkExtraArg = {
        api:$api,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware:getDefaultMiddleware => getDefaultMiddleware({
            thunk:{
                extraArgument:extraArg
            }
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
