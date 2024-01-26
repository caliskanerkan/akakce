import { Link } from "@remix-run/react";
import { BiSolidDownArrow } from "react-icons/bi";
import {
  convertToCurrency,
  convertToFollowCountText,
  convertToPercentage,
} from "~/common/utils/Converters";
import { ProductType } from "~/products/model/Product";

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Link
      to={`/products/${product.code}`}
      className='shadow p-4 rounded-xl bg-white flex flex-col h-[260px] gap-1'
      title={product.name}
    >
      <img
        className='h-[150px] object-contain'
        src={product.imageUrl}
        alt={product.name}
        title={product.name}
      />
      <h6 className='text-md font-bold text-gray-500 truncate'>
        {product.name}
      </h6>
      <div className='flex gap-4 items-center'>
        <div className='text-xs font-semibold text-black'>En Ucuz</div>
        {product.dropRatio ? (
          <div className='text-green-500 text-xs flex items-center gap-1'>
            <BiSolidDownArrow size={12} />
            {convertToPercentage(product.dropRatio)}
          </div>
        ) : undefined}
      </div>
      <div className='flex justify-between items-center'>
        <div className='font-semibold text-gray-700'>
          {convertToCurrency(product.price)}
        </div>
        <div className='text-xs text-blue-400 uppercase'>
          {convertToFollowCountText(product.followCount)}
        </div>
      </div>
    </Link>
  );
};
