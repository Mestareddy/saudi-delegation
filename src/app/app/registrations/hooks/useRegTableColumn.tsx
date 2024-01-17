import { ColumnsType } from "antd/es/table";
import { useMemo } from "react";

const useRegTableColumn = () => {
  const columns = useMemo(() => {
    const header: ColumnsType<any> = [
      {
        title: "Company Name",
        dataIndex: "business_name",
        ellipsis: true,
        width: 150,
      },
      {
        title: "Industry",
        dataIndex: "industry",
        width: 200,
        key: "surname",
        // ellipsis: true,
      },
      {
        title: "Company Email",
        dataIndex: "business_email",
        width: 200,
        // ellipsis: true,
      },
      {
        title: "Attendance",
        dataIndex: "attendance",
        key: "gender",
        width: 200,
        // ellipsis: true,
      },
      {
        title: "Speaking Opportunity",
        dataIndex: "speaking_opportunity",
        ellipsis: true,
        width: 200,
      },
      {
        title: "Booth",
        dataIndex: "booth",
        ellipsis: true,
      },
      {
        title: "Company/Employee Size",
        dataIndex: "company_size",
        ellipsis: true,
        width: 250,
      },
    ];
    return header;
  }, []);
  return {
    columns,
  };
};

export default useRegTableColumn;
