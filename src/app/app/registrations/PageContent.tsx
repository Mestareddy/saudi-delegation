import { CustomTable, SearchInput } from "@/components/common";
import React from "react";
import { RegistrationTab } from "./components";
import { useRegTableColumn } from "./hooks";

const data = [
  {
    id: 1,
    business_name: 'Chill Co',
    industry: 'Banking/finance',
    business_email: 'chillco@gmail.com',
    attendance: 'Requested',
    speaking_opportunity: 'N/A',
    booth: 'Requested',
    company_size: '100-150'
  }
]

const duplicatedData = Array.from({ length: 50 }, (_, index) => ({
  ...data[0],
  id: index + 1 // Assuming you want unique IDs for duplicated objects
}));



const PageContent: React.FunctionComponent = () => {
  const { columns } = useRegTableColumn()
  const handleFilter = () => {
    return true
  }
  return (
    <div>
      <CustomTable
        sticky
        tableTitle="Registrations"
        columns={columns}
        dataSource={duplicatedData}
        tabs={
          <RegistrationTab
            defaultKey={'Submissions'}
          />
        }
        searchPanel={
          <div className="flex items-center space-x-2">
            <SearchInput
              onFilter={handleFilter}
              placeholder="Search"
            />
          </div>
        }
      />
    </div>
  );
};

export default PageContent;
