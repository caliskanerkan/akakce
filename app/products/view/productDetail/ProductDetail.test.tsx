import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { convertToCurrency } from "~/common/utils/Converters";
import { ProductDetailType } from "~/products/model/ProductDetail";
import { ProductDetail } from "~/products/view/productDetail/ProductDetail";

const data: ProductDetailType = {
  mkName: "Apple",
  productName: "",
  badge: "",
  imageUrl: "https://cdn.akakce.com/z/apple/iphone-13.jpg",
  storageOptions: [],
  countOfPrices: 0,
  price: 25000,
  rating: 0,
  freeShipping: false,
  lastUpdate: "",
};

test("Product Detail Components in the document", () => {
  const { queryByTestId } = render(<ProductDetail product={data} />);
  const productDetailComponent = queryByTestId("productDetail-component");
  expect(productDetailComponent).toBeInTheDocument();
});
test("ProductDetail container have a className", () => {
  const { queryByTestId } = render(<ProductDetail product={data} />);
  const productDetailComponent = queryByTestId("productDetail-component");
  expect(productDetailComponent).toHaveClass("py-4 h-[380px]");
});

test("ProductDetail render props truly", () => {
  const price = convertToCurrency(data.price);
  const { getByText } = render(<ProductDetail product={data} />);
  expect(getByText(data.mkName)).toBeInTheDocument();
  expect(getByText(price)).toBeInTheDocument();
});

test("ProductDetail img has a src and alt attribute", () => {
  const { getByAltText } = render(<ProductDetail product={data} />);
  const image = getByAltText(data.mkName);
  expect(image).toHaveAttribute("src", data.imageUrl);
  expect(image).toHaveAttribute("alt", data.mkName);
});
