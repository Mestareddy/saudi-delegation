import { CustomButton, CustomTable, SearchInput } from "@/components/common";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setRegistrantData,
  toggleRegistrantDetailsModal,
  // updateTriggerCallBack,
} from "@/lib/features/registrantDetailsModalSlice";
import DocumentDownload from "@/components/icons/DocumentDownload";
import { useAttendee, useRegTableColumn } from "@/components/hooks";
import { RegistrationTab } from "@/components/attendee";
import { RootState } from "@/lib/store";

const PageContent: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { columns } = useRegTableColumn();
  const {
    totalPages,
    currentPage,
    attendeeStatus,
    handleSearchQuery,
    handleExportToExcel,
    changeAttendeeStatus,
    attendeeSWR: { data, isLoading, mutate },
  } = useAttendee({ type: "attendee" });

  const registrantModalStatus = useAppSelector(
    (state: RootState) =>
      state.registrantDetailsModalSlice.registrantDetailsModal
  );

  // useEffect(() => {
  //   // dispatch(updateTriggerCallBack(mutate));

  //   // return () => {
  //   //   dispatch(updateTriggerCallBack(null));
  //   // };
  // }, []); //eslint-disable-line

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger mutate every 30 seconds
      mutate();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [mutate]);

  useEffect(() => {
    // Trigger mutate when registrantModalStatus changes
    if (registrantModalStatus) {
      mutate();
    }
  }, [registrantModalStatus, mutate]);

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

  console.log("registrant data", data);

  return (
    <div>
      <CustomTable
        sticky
        columns={columns}
        dataSource={data?.data}
        tableTitle="Registrations"
        totalContent={totalPages}
        currentPage={currentPage}
        loading={isLoading}
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
        className={{
          container: "h-[calc(100vh-200px)]",
        }}
      />
    </div>
  );
};

export default PageContent;
