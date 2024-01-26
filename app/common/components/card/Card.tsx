import clsx from "clsx";
import { ComponentType } from "~/common/model/ComponentType";

export default function Card({ children, className }: ComponentType) {
  return (
    <div
      className={clsx(
        "bg-white shadow-md rounded-md w-full h-full p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
