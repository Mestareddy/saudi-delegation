import { CustomTable, SearchInput } from "@/components/common";
import React, { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistrantData,
  toggleRegistrantDetailsModal,
} from "@/lib/features/registrantDetailsModalSlice";
import { TableRowSelection } from "antd/es/table/interface";
import { TAttendee } from "../registrations/types";
import { useAttendee, useRegTableColumn } from "../registrations/hooks";

const PageContent: React.FunctionComponent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const dispatch = useAppDispatch();
  const { columns } = useRegTableColumn();
  const {
    totalPages,
    currentPage,
    handleSearchQuery,
    attendeeSWR: { data, isLoading, isValidating },
  } = useAttendee(undefined, '&request_booth=1');

  const dataSource = data?.data.map((item: TAttendee) => ({
    ...item,
    key: item.id,
  }));

  const handleFilter = () => {
    return true;
  };

  const toggleRegistrantModal = (record: any) => {
    dispatch(setRegistrantData(record));
    dispatch(toggleRegistrantDetailsModal(true));
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const searchPanel = (
    <div className="flex items-center space-x-2">
      <SearchInput
        placeholder="Search"
        onFilter={handleFilter}
        onChange={handleSearchQuery}
      />
    </div>
  )

  return (
    <div>
      <CustomTable
        sticky
        columns={columns}
        tableTitle="Booths"
        dataSource={dataSource}
        totalContent={totalPages}
        searchPanel={searchPanel}
        currentPage={currentPage}
        loading={isLoading || isValidating}
        rowSelection={rowSelection}
        onRow={(record) => ({
          onClick: () => {
            toggleRegistrantModal(record);
          },
          style: { cursor: "pointer" },
        })}
      />
    </div>
  );
};

export default PageContent;
