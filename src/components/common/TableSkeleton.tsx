import React from "react";
import { Skeleton, SkeletonProps } from "antd";
import { mergeClassnames } from "@/util";

type SkeletonTableProps = SkeletonProps & {
  columnCount: number;
  rowCount?: number;
  title?: boolean;
};

const SkeletonTable: React.FunctionComponent<SkeletonTableProps> = ({
  active = false,
  rowCount = 5,
  columnCount,
  className,
  title,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      {title ? (
        <Skeleton
          title={false}
          active={active}
          paragraph={{
            rows: 1,
            className: "!h-6 w-full [&>li]:!w-1/5 [&>li]:!h-full",
          }}
        />
      ) : null}
      <table className="w-full border-spacing-y-0.5 border-separate">
        <thead>
          <tr>
            {[...Array(columnCount)].map((_, id: number) => {
              return (
                <th
                  key={id}
                  className={mergeClassnames("bg-[#EAF9F4] py-[5px] px-[10px]", className)}
                >
                  <Skeleton
                    title={false}
                    active={active}
                    paragraph={{
                      rows: 1,
                      className: "!h-6 w-full [&>li]:!w-full [&>li]:!h-full",
                    }}
                  />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {[...Array(rowCount)].map((_, index) => (
            <tr key={index}>
              {[...Array(columnCount)].map((_, id: number) => {
                return (
                  <td
                    key={id}
                    className={mergeClassnames(
                      "py-[5px] px-[10px] bg-white",
                      // index % 2 ? "bg-[#F0F6F4]" : "bg-white",
                      className
                    )}
                  >
                    <Skeleton
                      title={false}
                      active={active}
                      paragraph={{
                        rows: 1,
                        className: "!h-6 w-full [&>li]:!w-full [&>li]:!h-full",
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default SkeletonTable