import React from "react";
import { Pagination } from "antd";
import Heading from "./Heading";

interface PaginationHeaderProps {
  tableTitle?: string | null | React.ReactNode;
  pageSize?: number;
  currentPage?: number;
  totalContent?: number;
  pageChangeCallBack?: (page: number) => void; // eslint-disable-line
}

const PaginationHeader: React.FunctionComponent<PaginationHeaderProps> = ({
  currentPage,
  pageChangeCallBack,
  pageSize,
  tableTitle,
  totalContent,
}) => {
  return (
    <header className="mb-3 flex flex-wrap gap-2 justify-start items-center">
      <Heading className="text-[20px] roboto font-bold capitalize">
        {tableTitle}
      </Heading>
      <div className="h-5 w-[1px] mx-4 bg-[#1212121A]" />
      <Pagination
        total={totalContent}
        current={currentPage}
        pageSize={pageSize}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
        onChange={pageChangeCallBack}
      />
    </header>
  );
}

export default PaginationHeader;
