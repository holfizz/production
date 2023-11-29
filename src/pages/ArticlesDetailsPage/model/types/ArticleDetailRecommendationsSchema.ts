import {EntityState} from "@reduxjs/toolkit"
import {Article} from "entity/Article"


export interface ArticleDetailRecommendationsSchema extends EntityState<Article>{
  isLoading?:boolean;
  error?:string;
}