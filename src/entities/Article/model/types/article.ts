export enum ArticleBlockTypes {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface ArticleBockBase {
  is: string;
  type: ArticleBlockTypes;
}
export interface ArticleCodeBlock extends ArticleBockBase {
  type: ArticleBlockTypes.CODE;
  code: string;
}
export interface ArticleImageBlock extends ArticleBockBase {
  type: ArticleBlockTypes.IMAGE;
  src: string;
  title: string;
}
export interface ArticleTextBlock extends ArticleBockBase {
  type: ArticleBlockTypes.TEXT;
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

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  types: ArticleType[];
  blocks: ArticleBlock[];
}
