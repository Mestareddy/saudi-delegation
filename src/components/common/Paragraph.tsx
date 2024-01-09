import { mergeClassnames } from "@/util";
import React from "react";

interface ParagraphProps {
  type?: "body1" | "body2" | "body3";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Paragraph: React.FunctionComponent<ParagraphProps> = ({ type, children, className, style }) => {
  let template: React.JSX.Element | null = null;

  switch (type) {
    case "body1":
      template = (
        <p
          style={style}
          className={mergeClassnames("text-black-20 text-base font-[450px]", className)}
        >
          {children}
        </p>
      );
      break;
    case "body2":
      template = (
        <p
          style={style}
          className={mergeClassnames("text-gray-10 text-sm font-[450px]", className)}
        >
          {children}
        </p>
      );
      break;
    case "body3":
      template = (
        <span
          style={style}
          className={mergeClassnames(
            "text-gray-10 text-xs font-semibold",
            className
          )}
        >
          {children}
        </span>
      );
      break;

    default:
      template = (
        <p
          style={style}
          className={mergeClassnames("text-black-20 text-base font-[450px]", className)}
        >
          {children}
        </p>
      );
      break;
  }

  return <>{template}</>;
}

export default Paragraph;
