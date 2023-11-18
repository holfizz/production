import {Article} from "entitie/Article"

export interface ArticleDetailsSchema {
  isLoading:boolean;
  error?:string;
  data?:Article;
}
