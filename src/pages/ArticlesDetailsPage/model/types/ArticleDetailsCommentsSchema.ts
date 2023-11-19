import {EntityState} from "@reduxjs/toolkit"
import {Comment} from "entitie/Comment"


export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
  isLoading?:boolean;
  error?:string;
}
