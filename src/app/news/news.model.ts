export interface NewsModel {
  news_header: string;
  short_text: string;
  text: string;
  id: number;
  owner: number;
  publish_date: string;
  title: string;
  keywords: string;
  description: string;
  link: string;
  image: number;
  imageLink?: string;
}
