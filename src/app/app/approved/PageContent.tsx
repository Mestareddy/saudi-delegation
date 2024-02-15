import { CustomButton, CustomTable, SearchInput } from "@/components/common";
import React from "react";
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistrantData,
  toggleRegistrantDetailsModal,
} from "@/lib/features/registrantDetailsModalSlice";
import DocumentDownload from "@/components/icons/DocumentDownload";
import { useAttendee, useRegTableColumn } from "@/components/hooks";

const PageContent: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { columns } = useRegTableColumn();
  const {
    totalPages,
    currentPage,
    attendeeStatus,
    handleSearchQuery,
    handleExportToExcel,
    attendeeSWR: { data, isLoading },
  } = useAttendee({ type: "attendee", defaultStatus: "approve" });

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
      <CustomButton
        onClick={() => {
          if (data?.data) {
            handleExportToExcel(data?.data, `${attendeeStatus}_attendees_list`);
          }
        }}
        variant="icon"
      >
        <DocumentDownload />
      </CustomButton>
    </div>
  );

  console.log("approved datrar", data);

  return (
    <div>
      <CustomTable
        sticky
        columns={columns}
        dataSource={data?.data}
        totalContent={totalPages}
        currentPage={currentPage}
        tableTitle="Approved Attendee"
        loading={isLoading}
        searchPanel={searchPanel}
        onRow={(record) => ({
          onClick: () => {
            toggleRegistrantModal(record);
          },
          style: { cursor: "pointer" },
        })}
        className={{}}
      />
    </div>
  );
};

export default PageContent;
