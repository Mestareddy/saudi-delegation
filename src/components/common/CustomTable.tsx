import { TableProps, Table } from "antd";
import React, { lazy, Suspense } from "react";

const PaginationHeader = lazy(() => import("./PaginationHeader"));

interface CustomTableProps<T>
  extends Omit<TableProps<T>, "pagination" | "title"> {
  tableTitle?: string | null | React.ReactNode;
  pageSize?: number;
  currentPage?: number;
  totalContent?: number;
  tabs?: React.ReactNode;
  searchPanel?: React.ReactNode;
  pageChangeCallBack?: (page: number) => void; // eslint-disable-line
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
    <section className="flex flex-col">
      {tabs && paginationHeader}
      <div className="flex mb-2.5 flex-wrap gap-2 justify-between items-center">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          {tabs ? <div className="-mb-3.5">{tabs}</div> : paginationHeader}
        </div>
        <div className="flex flex-col">{searchPanel}</div>
      </div>
      <div className="h-full flex flex-col">
        <div className="h-[calc(100vh-80px)]">
          <Table
            {...otherTableProps}
            scroll={{ x: "max-content" }}
            pagination={false}
            tableLayout="auto"
            dataSource={dataSource}
            key={"id"}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomTable;
