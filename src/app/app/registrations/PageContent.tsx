import { CustomTable, SearchInput } from "@/components/common";
import React from "react";
import { RegistrationTab } from "./components";
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistrantData,
  toggleRegistrantDetailsModalOpen,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAttendee, useRegTableColumn } from "./hooks";

const data = [
  {
    id: 1,
    business_name: "Chill Co",
    industry: "Banking/finance",
    business_email: "chillco@gmail.com",
    attendance: "Requested",
    speaking_opportunity: "N/A",
    booth: "Requested",
    company_size: "100-150",
  },
];

const duplicatedData = Array.from({ length: 50 }, (_, index) => ({
  ...data[0],
  id: index + 1, // Assuming you want unique IDs for duplicated objects
}));

const PageContent: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { columns } = useRegTableColumn();
  const { attendeeSWR: { data } } = useAttendee()

  const handleFilter = () => {
    return true;
  };

  const toggleRegistrantModal = (record: any) => {
    dispatch(setRegistrantData(record));
    dispatch(toggleRegistrantDetailsModalOpen());
    // console.log(record);
  };
  return (
    <div>
      <CustomTable
        sticky
        tableTitle="Registrations"
        columns={columns}
        dataSource={duplicatedData}
        tabs={<RegistrationTab defaultKey={"Submissions"} />}
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
        scroll={{ x: 1500, y: 300 }}
      />
    </div>
  );
};

export default PageContent;
