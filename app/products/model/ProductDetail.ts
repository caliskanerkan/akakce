import { ProductType } from "~/products/model/Product";

export interface ProductDetailType {
  mkName: string;
  productName: string;
  badge: string;
  imageUrl: string;
  storageOptions: string[];
  countOfPrices: number;
  price: number;
  rating: number;
  freeShipping: boolean;
  lastUpdate: string;
}

export const defaultProductDetailURL: string =
  "1a1fb542-22d1-4919-914a-750114879775";

export interface ProductDetailResponseType {
  result: ProductDetailType;
}

export interface ProductDetailMixedType {
  product: ProductDetailType;
  suggestions: ProductType[];
}
