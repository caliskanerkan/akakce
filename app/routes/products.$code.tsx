import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData, useRouteError } from "@remix-run/react";
import notFound from "app/common/icons/notFound.svg";
import { ErrorBoundary as ErrorComponent } from "~/common/components/errorBoundary/ErrorBoundary";
import {
  getProductDetail,
  getProducts,
} from "~/products/controller/ProductService";
import { ProductDetailMixedType } from "~/products/model/ProductDetail";
import { ProductDetailContainer } from "~/products/view/productDetail/ProductDetailContainer";

export async function loader({ params }: LoaderFunctionArgs) {
  const code = params.code;
  if (!code) {
    throw new Error("Verileri çekmeye çalışırken bir hata oldu.");
  }

  try {
    const { result } = await getProductDetail(code);
    const suggestions = await getProducts();
    return {
      product: result,
      suggestions: suggestions.result.horizontalProducts,
    };
  } catch (error) {
    return error;
  }
}

export const meta: MetaFunction = ({ data }) => {
  const { product } = data as ProductDetailMixedType;
  return [
    {
      title: product.productName,
      description: `${product.mkName}: ${product.productName}`,
    },
  ];
};

export default function ProductDetailPage() {
  const { product, suggestions } = useLoaderData<ProductDetailMixedType>();
  return <ProductDetailContainer product={product} suggestions={suggestions} />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorComponent error={error} image={notFound} />;
}
