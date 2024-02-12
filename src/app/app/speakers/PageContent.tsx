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
    handleSearchQuery,
    handleExportToExcel,
    speakersStatusSWR: { data, isLoading, isValidating },
  } = useAttendee("approve");

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
            handleExportToExcel(data?.data, `speakers_list`);
          }
        }}
        variant="icon"
      >
        <DocumentDownload />
      </CustomButton>
    </div>
  );

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
