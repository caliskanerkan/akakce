import { MetaFunction, useLoaderData, useRouteError } from "@remix-run/react";
import { ErrorBoundary as Error } from "~/common/components/errorBoundary/ErrorBoundary";
import { getProducts } from "~/products/controller/ProductService";
import { ProductResponseType } from "~/products/model/Product";
import { ProductListContainer } from "~/products/view/productList/ProductListContainer";

export async function loader() {
  try {
    const response = await getProducts();
    return response;
  } catch (error) {
    return error;
  }
}

export const meta: MetaFunction = () => {
  return [
    {
      title: "Ne Nerede En Ucuz Akakçe'de",
    },
    {
      property: "og:title",
      content: "En ucuza burada bulabilirsiniz",
    },
  ];
};

export default function ProductsPage() {
  const {
    result: { products, nextUrl, horizontalProducts },
  } = useLoaderData<ProductResponseType>();

  return (
    <div className='py-4 flex flex-col gap-2'>
      <ProductListContainer
        products={products}
        horizontalProducts={horizontalProducts}
        nextURL={nextUrl}
      />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <Error error={error} />;
}
