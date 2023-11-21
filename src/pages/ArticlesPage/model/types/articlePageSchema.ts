import {EntityState} from "@reduxjs/toolkit"
import {Article, ArticleView} from "entitie/Article"

export interface ArticlePageSchema extends  EntityState<Article>{
  isLoading?:boolean
  error?:string

  view:ArticleView
}
