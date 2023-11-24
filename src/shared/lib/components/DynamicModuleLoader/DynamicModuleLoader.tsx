import {FC, PropsWithChildren, useEffect} from "react"
import {useDispatch, useStore} from "react-redux"
import {ReduxStoreWithManager, StateSchema} from "app/providers/StoreProvider"
import {StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema"
import {Reducer} from "@reduxjs/toolkit"

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoader {
  reducer: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<PropsWithChildren<DynamicModuleLoader>> = ({
    children,
    reducer,
    removeAfterUnmount = true,
}) => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers()
        Object.entries(reducer).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey]
            //add a new reducer if it doesn’tx exist
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@UNIT ${name as StateSchemaKey} reducer` })
            }
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducer).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name as StateSchemaKey} reducer` })
                })
            }
        }
    //eslint-disable-next-line
  }, []);
    return <>{children}</>
}

export default DynamicModuleLoader
