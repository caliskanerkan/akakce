import API from "~/common/api";
import {
  ProductResponseType,
  defaultProductURL,
} from "~/products/model/Product";
import {
  ProductDetailResponseType,
  defaultProductDetailURL,
} from "~/products/model/ProductDetail";

export const getProducts = (
  url = defaultProductURL
): Promise<ProductResponseType> => {
  return API.get(url);
};

export const getProductDetail = (
  code: string,
  url = defaultProductDetailURL
): Promise<ProductDetailResponseType> => {
  const params = {
    code,
  };
  return API.get(url, {
    params,
  });
};
