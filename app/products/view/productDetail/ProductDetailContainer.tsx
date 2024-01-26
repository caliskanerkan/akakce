import { Carousel } from "~/common/components/carousel/Carousel";
import { ProductDetailMixedType } from "~/products/model/ProductDetail";
import { Product } from "~/products/view/product/Product";
import { ProductDetail } from "~/products/view/productDetail/ProductDetail";

interface ProductDetailContainerProps extends ProductDetailMixedType {}

export const ProductDetailContainer = ({
  product,
  suggestions,
}: ProductDetailContainerProps) => {
  return (
    <>
      <ProductDetail product={product} />
      <div className='flex flex-col gap-4 mt-4'>
        <h1 className='font-extrabold text-gray-700 text-2xl'>
          Benzer Ürünler
        </h1>
        <Carousel>
          {suggestions.map((product) => (
            <Product product={product} key={product.code} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
