import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface IconProps {
  size?: number;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaHidden?: boolean;
  strokeWidth?: number;
}

const IconShoppingCart = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 20,
      style,
      title,
      className,
      ariaHidden = false,
      strokeWidth = 2,
      ...props
    },
    ref,
  ) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("pointer-events-none", className)}
      style={
        {
          "--size": `calc(1px * ${size})`,
          "--vw": "24px",
          "--vh": "24px",
          width: "var(--size)",
          height: "calc((var(--vh) / var(--vw)) * var(--size))",
          ...style,
        } as React.CSSProperties
      }
      {...(ariaHidden && { "aria-hidden": ariaHidden })}
      {...props}
    >
      {title && <title>{title}</title>}
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
);

IconShoppingCart.displayName = "IconShoppingCart";
export default IconShoppingCart;
