export interface ProductType {
  code: number;
  price: number;
  countOfPrices: number;
  imageUrl: string;
  name: string;
  followCount?: number;
  dropRatio?: number;
}

export const defaultProductURL: string = "59906f35-d5d5-40f7-8d44-53fd26eb3a05";

export interface ProductResponseType {
  result: {
    nextUrl: string | null;
    horizontalProducts: ProductType[];
    products: ProductType[];
  };
}
