import clsx from "clsx";
import { FaStar } from "react-icons/fa6";

export interface RateProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  title?: string;
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export const Rate = ({
  rating,
  size = "md",
  title = `Ürün puan:${rating}`,
}: RateProps) => {
  const stars = Array.from({ length: 5 }, (_, idx) => idx + 1);
  const roundedRating = Math.round(rating);

  return (
    <div className='flex gap-1 cursor-pointer' title={title}>
      {stars.map((star) => {
        const className =
          star <= roundedRating ? "text-yellow-300" : "text-blue-100";
        return (
          <FaStar key={star} className={clsx(className, sizeClasses[size])} />
        );
      })}
    </div>
  );
};
