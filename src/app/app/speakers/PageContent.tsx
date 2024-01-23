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
    totalPages,
    currentPage,
    handleSearchQuery,
  } = useAttendee(undefined, '&request_as_speaker=1');

  const handleFilter = () => {
    return true;
  };

  const toggleRegistrantModal = (record: any) => {
    dispatch(setRegistrantData(record));
    dispatch(toggleRegistrantDetailsModal(true));
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
        dataSource={data?.data}
        tableTitle="Speakers"
        totalContent={totalPages}
        currentPage={currentPage}
        loading={isLoading || isValidating}
        searchPanel={searchPanel}
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
