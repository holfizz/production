import { User } from "@/entities/User"
import {
    ArticleBlockType,
    ArticleType,
} from "@/entities/Article/model/const/const"

export interface ArticleBockBase {
  id: string;
  type: ArticleBlockType;
}
export interface ArticleCodeBlock extends ArticleBockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleImageBlock extends ArticleBockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}
export interface ArticleTextBlock extends ArticleBockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface Article {
  id: string;
  user:User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
