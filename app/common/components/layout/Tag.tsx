import { ReactHTML } from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof ReactHTML;
  props?: React.ComponentProps<any>;
}

export const Tag = ({ children, className, as = "div", props }: TagProps) => {
  const El = as;
  return (
    <El className={className} {...props}>
      {children}
    </El>
  );
};
