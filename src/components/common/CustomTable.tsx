import { mergeClassnames } from "@/util";
import { TableProps, Table } from "antd";
import React, { lazy, Suspense } from "react";

const PaginationHeader = lazy(() => import("./PaginationHeader"));

type iclassName = "wrapper" | "container" | "table";

interface CustomTableProps<T>
  extends Omit<TableProps<T>, "pagination" | "title" | "className"> {
  tableTitle?: string | null | React.ReactNode;
  pageSize?: number;
  currentPage?: number;
  totalContent?: number;
  tabs?: React.ReactNode;
  searchPanel?: React.ReactNode;
  pageChangeCallBack?: (page: number) => void; // eslint-disable-line
  className?: Partial<Record<iclassName, string>> | string;
}

const CustomTable = <T extends object>({
  tabs,
  searchPanel,
  tableTitle,
  currentPage = 1,
  dataSource,
  pageSize = 100,
  totalContent = 0,
  pageChangeCallBack,
  className,
  ...otherTableProps
}: CustomTableProps<T>) => {
  const paginationHeader = (
    <Suspense fallback={null}>
      <PaginationHeader
        currentPage={currentPage}
        pageChangeCallBack={pageChangeCallBack}
        pageSize={pageSize}
        tableTitle={tableTitle}
        totalContent={totalContent}
      />
    </Suspense>
  );

  return (
    <section
      className={mergeClassnames(
        "flex flex-col",
        typeof className !== "string" ? className?.wrapper : ""
      )}
    >
      {tabs && paginationHeader}
      <div className="flex mb-2.5 flex-wrap gap-2 justify-between items-center">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          {tabs ? <div className="-mb-3.5">{tabs}</div> : paginationHeader}
        </div>
        <div className="flex flex-col">{searchPanel}</div>
      </div>
      <div
        className={mergeClassnames(
          "h-[calc(100vh-150px)] flex flex-col bg-white rounded-t-md",
          typeof className !== "string" ? className?.container : ""
        )}
      >
        <Table
          {...otherTableProps}
          scroll={{ x: "max-content" }}
          pagination={false}
          tableLayout="auto"
          dataSource={dataSource}
          key={"id"}
          className={
            typeof className !== "string" ? className?.wrapper : className
          }
        />
      </div>
    </section>
  );
};

export default CustomTable;
