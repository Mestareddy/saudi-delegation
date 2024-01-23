import { CustomTable, SearchInput } from "@/components/common";
import React from "react";
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistrantData,
  toggleRegistrantDetailsModal,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAttendee, useRegTableColumn } from "../registrations/hooks";

const PageContent: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { columns } = useRegTableColumn();
  const {
    attendeeSWR: { data, isLoading, isValidating },
  } = useAttendee('approve');

  const handleFilter = () => {
    return true;
  };

  const toggleRegistrantModal = (record: any) => {
    dispatch(setRegistrantData(record));
    dispatch(toggleRegistrantDetailsModal(true));
  };

  return (
    <div>
      <CustomTable
        sticky
        columns={columns}
        dataSource={data?.data}
        tableTitle="Approved Attendee"
        loading={isLoading || isValidating}
        searchPanel={
          <div className="flex items-center space-x-2">
            <SearchInput onFilter={handleFilter} placeholder="Search" />
          </div>
        }
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
