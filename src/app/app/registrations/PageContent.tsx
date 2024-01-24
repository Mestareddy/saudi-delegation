import { CustomButton, CustomTable, SearchInput } from "@/components/common";
import React from "react";
import { RegistrationTab } from "./components";
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistrantData,
  toggleRegistrantDetailsModal,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAttendee, useRegTableColumn } from "./hooks";
import DocumentDownload from "@/components/icons/DocumentDownload";

const PageContent: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { columns } = useRegTableColumn();
  const {
    totalPages,
    currentPage,
    attendeeStatus,
    handleSearchQuery,
    changeAttendeeStatus,
    attendeeSWR: { data, isLoading, isValidating },
  } = useAttendee();

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
      {attendeeStatus === "reject" ? (
        <CustomButton variant="icon">
          <DocumentDownload />
        </CustomButton>
      ) : null}
    </div>
  )

  return (
    <div>
      <CustomTable
        sticky
        columns={columns}
        dataSource={data?.data}
        tableTitle="Registrations"
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
        tabs={
          <RegistrationTab
            onTabSelect={changeAttendeeStatus}
            defaultKey={"Submissions"}
          />
        }
      />
    </div>
  );
};

export default PageContent;
