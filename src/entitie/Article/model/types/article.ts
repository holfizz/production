import {User} from "entitie/User"

export enum ArticleSortField{
  VIEWS='views',
  TITLE='title',
  CREATE="create"
}


export enum ArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

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

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum ArticleView{
  BIG="BIG",
  SMALL = "SMALL"
}

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
