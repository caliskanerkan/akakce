import { ProductType } from "~/products/model/Product";
import { Product } from "~/products/view/product/Product";

export interface ProductListProps {
  products: ProductType[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-2 gap-2'>
        {products.map((product) => (
          <Product key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
};
