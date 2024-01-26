import clsx from "clsx";
import { ComponentType } from "~/common/model/ComponentType";

export const Container = ({ children, className }: ComponentType) => {
  return <div className={clsx("w-[900px]", className)}>{children}</div>;
};
