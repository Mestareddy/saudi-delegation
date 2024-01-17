import { Paragraph } from "@/components/common";
import { ColumnsType } from "antd/es/table";
import { useMemo } from "react";

const useRegTableColumn = () => {
  const columns = useMemo(() => {
    const header: ColumnsType<any> = [
      {
        title: "Company Name",
        dataIndex: "company_name",
        ellipsis: true,
        width: 150,
      },
      {
        title: "Industry",
        dataIndex: "industry",
        width: 200,
        key: "surname",
        ellipsis: true,
      },
      {
        title: "Company Email",
        dataIndex: "business_email",
        width: 200,
        ellipsis: true,
      },
      {
        title: "Attendance",
        dataIndex: "attendance",
        key: "gender",
        width: 200,
        ellipsis: true,
      },
      {
        title: "Speaking Opportunity",
        dataIndex: "speaking_opportunity",
        ellipsis: true,
        width: 200,
        render: (value) => <Paragraph>{value ? "Requested" : "N/A"}</Paragraph>,
      },
      {
        title: "Booth",
        dataIndex: "booth",
        ellipsis: true,
        width: 150,
        render: (value) => <Paragraph>{value ? "Requested" : "N/A"}</Paragraph>,
      },
      {
        title: "Company/Employee Size",
        dataIndex: "company_size",
        width: 250,
        ellipsis: true,
      },
    ];
    return header;
  }, []);
  return {
    columns,
  };
};

export default useRegTableColumn;
