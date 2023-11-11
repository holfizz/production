import { FC, PropsWithChildren, useEffect } from "react"
import { useDispatch, useStore } from "react-redux"
import { ReduxStoreWithManager } from "app/providers/StoreProvider"
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema"
import { Reducer } from "@reduxjs/toolkit"

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoader {
  reducer: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<PropsWithChildren<DynamicModuleLoader>> = ({
    children,
    reducer,
    removeAfterUnmount,
}) => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducer).forEach(([name, reducer]:ReducersListEntry)=>{
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@UNIT ${name} reducer` })
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducer).forEach(([name]:ReducersListEntry)=>{
                    store.reducerManager.remove(name)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })

            }
        }
    //eslint-disable-next-line
  }, []);
    return <>{children}</>
}

export default DynamicModuleLoader
