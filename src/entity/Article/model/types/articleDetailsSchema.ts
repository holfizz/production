import {Article} from "entity/Article"

export interface ArticleDetailsSchema {
  isLoading:boolean;
  error?:string;
  data?:Article;
}
