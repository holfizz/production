import {CounterSchema} from "entitie/Counter"
import {UserSchema} from "entitie/User"
import {LoginSchema} from "features/AuthByUsername"
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,} from "@reduxjs/toolkit"
import {ProfileSchema} from "entitie/Profile"
import {AxiosInstance} from "axios"
import {ArticleDetailsSchema} from "entitie/Article"
import {ArticleDetailsCommentsSchema} from "pages/ArticlesDetailsPage"
import {AddCommentFormSchema} from "features/AddNewCommentForm"
import {ArticlePageSchema} from "pages/ArticlesPage"
import {ScrollSaveSchema} from "features/ScrollSave"

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave:ScrollSaveSchema

  //async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers:()=>MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
export interface ThunkExtraArg {
  api: AxiosInstance;
}
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
