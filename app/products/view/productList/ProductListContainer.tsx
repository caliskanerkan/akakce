import { useState } from "react";
import { Button } from "~/common/components/button/Button";
import { Carousel } from "~/common/components/carousel/Carousel";
import { nextURLParser } from "~/common/utils/Parser";
import { getProducts } from "~/products/controller/ProductService";
import { ProductType } from "~/products/model/Product";
import { Product } from "~/products/view/product/Product";
import { ProductList } from "~/products/view/productList/ProductList";

export interface ProductListContainerProps {
  horizontalProducts: ProductType[];
  products: ProductType[];
  nextURL: string | null;
}

export const ProductListContainer = ({
  products,
  nextURL,
  horizontalProducts,
}: ProductListContainerProps) => {
  const [prods, setProds] = useState(products);
  const [nextPage, setNextPage] = useState(nextURLParser(nextURL));
  const [loading, setLoading] = useState(false);

  const onNextPage = async () => {
    try {
      setLoading(true);
      const {
        result: { nextUrl, products },
      } = await getProducts(nextPage!);
      setProds((prev) => [...prev, ...products]);
      setNextPage(nextURLParser(nextUrl));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 mt-4'>
        <h1 className='font-extrabold text-gray-700 text-2xl'>
          Önerilen Ürünler
        </h1>
        <Carousel>
          {horizontalProducts.map((product) => (
            <Product product={product} key={product.code} />
          ))}
        </Carousel>
      </div>
      <h1 className='font-extrabold text-gray-700 text-2xl'>Popüler Ürünler</h1>
      <ProductList products={prods} />
      <div className='flex justify-center'>
        {nextPage ? (
          <Button loading={loading} disabled={loading} onClick={onNextPage}>
            Daha Fazla Yükle
          </Button>
        ) : undefined}
      </div>
    </div>
  );
};
