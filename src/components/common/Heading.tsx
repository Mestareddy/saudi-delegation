import { mergeClassnames } from "@/util";
import React from "react";

interface HeadingProps {
  type?: "h1" | "h2" | "h3" | "btn";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Heading: React.FunctionComponent<HeadingProps> = ({
  type,
  children,
  className,
  style,
}) => {
  let template: React.JSX.Element | null = null;

  switch (type) {
    case "h1":
      template = (
        <h1
          style={style}
          className={mergeClassnames("text-gray-10  md:text-5xl font-bebas font-semibold text-2xl", className)}
        >
          {children}
        </h1>
      );
      break;
    case "h2":
      template = (
        <h2
          style={style}
          className={mergeClassnames("text-gray-10  font-bebas md:text-[40px] text-2xl", className)}
        >
          {children}
        </h2>
      );
      break;
    case "h3":
      template = (
        <h3
          style={style}
          className={mergeClassnames(
            "text-gray-10  bebas  font-bebas text-base md:text-2xl font-semibold",
            className
          )}
        >
          {children}
        </h3>
      );
      break;
    case "btn":
      template = (
        <span
          style={style}
          className={mergeClassnames(
            "text-gray-10  bebas  font-bebas text-base font-semibold",
            className
          )}
        >
          {children}
        </span>
      );
      break;

    default:
      template = (
        <h2
          style={style}
          className={mergeClassnames("text-gray-10 text-base  bebas font-bebas md:text-2xl", className)}
        >
          {children}
        </h2>
      );
      break;
  }

  return <>{template}</>;
};

export default Heading;
