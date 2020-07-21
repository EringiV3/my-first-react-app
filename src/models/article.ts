export interface Article {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  brand: string;
  largeCategory: string;
  smallCategory: string;
  description: string;
  imageUrlPc: ImageUrl;
  imageUrlSp: ImageUrl;
}

export interface ImageUrl {
  url: string;
}
