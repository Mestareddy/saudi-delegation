import { CustomTable, SearchInput } from "@/components/common";
import React, { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistrantData,
  toggleRegistrantDetailsModalOpen,
} from "@/lib/features/registrantDetailsModalSlice";
import { TableRowSelection } from "antd/es/table/interface";
import { TAttendee } from "../registrations/types";
import { useAttendee, useRegTableColumn } from "../registrations/hooks";

const PageContent: React.FunctionComponent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const dispatch = useAppDispatch();
  const { columns } = useRegTableColumn();
  const {
    attendeeSWR: { data, isLoading, isValidating },
  } = useAttendee();

  const dataSource = data?.data.map((item: TAttendee) => ({
    ...item,
    key: item.id,
  }));

  const handleFilter = () => {
    return true;
  };

  const toggleRegistrantModal = (record: any) => {
    dispatch(setRegistrantData(record));
    dispatch(toggleRegistrantDetailsModalOpen());
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <CustomTable
        sticky
        columns={columns}
        dataSource={dataSource}
        tableTitle="Booths"
        loading={isLoading || isValidating}
        searchPanel={
          <div className="flex items-center space-x-2">
            <SearchInput onFilter={handleFilter} placeholder="Search" />
          </div>
        }
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
