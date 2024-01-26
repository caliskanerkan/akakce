import { FaShippingFast } from "react-icons/fa";
import { Badge } from "~/common/components/badge/Badge";
import Card from "~/common/components/card/Card";
import { Options } from "~/common/components/options/Options";
import { Rate } from "~/common/components/rate/Rate";
import { convertToCurrency } from "~/common/utils/Converters";
import { ProductDetailType } from "~/products/model/ProductDetail";

interface ProductDetailProps {
  product: ProductDetailType;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className='py-4 h-[380px]'>
      <Card>
        <div className='flex gap-8 h-full' title={product.mkName}>
          <img src={product.imageUrl} alt='' className='object-contain' />
          <div className='flex flex-col gap-1'>
            <div className='text-blue-400'> {product.mkName} </div>
            <div className='text-gray-700 font-semibold'>
              {product.productName}
            </div>
            <div className='flex gap-2 items-center'>
              <Badge text={product.badge} />
              <Rate rating={product.rating} />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <Options options={product.storageOptions} />
              {product.countOfPrices ? (
                <div className='font-bold text-black text-sm'>
                  {product.countOfPrices} satıcı içinde kargo dahil en ucuz
                  fiyat seçeneği
                </div>
              ) : undefined}
              <div className='flex gap-4 items-center h-full'>
                <div className='font-extrabold text-2xl'>
                  {convertToCurrency(product.price)}
                </div>
                {product.freeShipping ? (
                  <div className='text-green-700 font-semibold text-sm flex items-center gap-1'>
                    <FaShippingFast />
                    Ücretsiz Kargo
                  </div>
                ) : undefined}
              </div>
              <div className='text-sm text-gray-300 font-light'>
                Son güncelleme: {product.lastUpdate}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
