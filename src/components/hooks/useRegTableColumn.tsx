import { Paragraph } from "@/components/common";
import { EventAttendee } from "@/types/attendee";
import { ColumnsType } from "antd/es/table";
import React, { useMemo } from "react";
import { AttendeeTableAction } from "../attendee";

const useRegTableColumn = () => {
  const columns = useMemo(() => {
    const header: ColumnsType<EventAttendee> = [
      {
        title: "Company Name",
        dataIndex: "company_name",
        ellipsis: true,
        width: 200,
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
      {
        title: "Action",
        key: "action",
        ellipsis: true,
        width: 200,
        onCell: () => {
          return {
            onClick: (event: React.MouseEvent) => {
              event.stopPropagation();
            },
          };
        },
        render: (record) => <AttendeeTableAction record={record} />,
      },
    ];
    return header;
  }, []);
  return {
    columns,
  };
};

export default useRegTableColumn;
