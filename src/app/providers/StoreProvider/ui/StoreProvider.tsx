import {FC, PropsWithChildren, ReactNode} from "react"
import {Provider} from "react-redux"
import {createReduxStore} from "app/providers/StoreProvider/config/store"
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema"
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit"

export interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
    children,
    initialState,
    asyncReducers,
}) => {
    const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
    )
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
