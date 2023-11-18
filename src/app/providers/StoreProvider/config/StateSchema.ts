import {CounterSchema} from "entitie/Counter"
import {UserSchema} from "entitie/User"
import {LoginSchema} from "features/AuthByUsername"
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,} from "@reduxjs/toolkit"
import {ProfileSchema} from "entitie/Profile"
import {AxiosInstance} from "axios"
import {NavigateOptions, To} from "react-router-dom"
import {ArticleDetailsSchema} from "entitie/Article"

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //async reducers
  loginForm?: LoginSchema;
  profile?:ProfileSchema
  articleDetails?:ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
      state: StateSchema,
      action: AnyAction
  ) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}


export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager:ReducerManager
}
export interface ThunkExtraArg {
  api:AxiosInstance
  navigate?:(to:To, options?:NavigateOptions) => void

}
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state:StateSchema
}
