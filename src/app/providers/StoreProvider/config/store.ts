import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"
import {StateSchema} from "./StateSchema"
import {counterReducer} from "entitie\'s/Counter"
import {userReducer} from "entitie\'s/User"
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager"

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}