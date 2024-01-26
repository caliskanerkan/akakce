import { Link } from "@remix-run/react";
import logo from "app/common/icons/logo.svg";
import clsx from "clsx";
import { ComponentType } from "~/common/model/ComponentType";

export interface LogoProps extends Omit<ComponentType, "children"> {
  description?: string;
}

export const Logo = ({
  className,
  description = "Anasayfaya gitmek için tıklayın",
}: LogoProps) => {
  return (
    <>
      <Link
        className={clsx("inline-block cursor-pointer", className)}
        title={description}
        to={"/"}
      >
        <img className='h-full w-[100px]' src={logo} alt={description} />
      </Link>
    </>
  );
};
