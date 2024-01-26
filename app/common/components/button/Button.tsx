import clsx from "clsx";
import { ComponentType } from "~/common/model/ComponentType";

interface InternalButtonProps extends ComponentType {
  loading?: boolean;
  loadingText?: string;
}

type ButtonProps = JSX.IntrinsicElements["button"] & InternalButtonProps;

export const Button = ({
  children,
  className,
  loading,
  loadingText = "Yükleniyor...",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 active:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...rest}
    >
      {loading ? loadingText : children}
    </button>
  );
};
