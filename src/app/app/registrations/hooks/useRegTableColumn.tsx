import { Paragraph } from "@/components/common";
import { CircleCloseIcon, MoreIcon, TickCircleIcon } from "@/components/icons";
import {
  setApproveData,
  toggleRegistrantApproveModalOpen,
  toggleRegistrantDeclineModalOpen,
} from "@/lib/features/registrantDetailsModalSlice";
import { setDeclineData } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { MenuProps, Space, Dropdown } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useMemo } from "react";

const useRegTableColumn = () => {
  const dispatch = useAppDispatch();


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
        render: (record) => {

          const onAccept = (id: string) => {
            dispatch(toggleRegistrantApproveModalOpen());
            dispatch(setApproveData(id));
          };
          const onDecline = (id: string) => {
            dispatch(toggleRegistrantDeclineModalOpen());
            dispatch(setDeclineData(id));
          };
          const handleMenuClick: MenuProps["onClick"] = (event) => {
            const itemKey = event.key;
            if (itemKey) {
              switch (itemKey) {
                case "1":
                  onAccept(record.id);
                  break;
                case "2": {
                  onDecline(record.id);
                  break;
                }
                default:
                  break;
              }
            }
          };

          const items: MenuProps["items"] = [
            {
              key: "1",
              label: (
                <div className="flex flex-row items-center mb-1">
                  <TickCircleIcon />
                  <Paragraph className="ml-2 font-semibold">Approve</Paragraph>
                </div>
              ),
            },
            {
              key: "2",
              label: (
                <div className="flex flex-row items-center">
                  <CircleCloseIcon />
                  <Paragraph className="ml-2 font-semibold">Decline</Paragraph>
                </div>
              ),
            },
          ];
          return (
            <>
              <Space size="middle">
                <Dropdown
                  menu={{
                    items,
                    onClick: handleMenuClick,
                    style: {
                      padding: 15,
                    },
                  }}
                  placement="bottomRight"
                >
                  <Space>
                    <MoreIcon />
                  </Space>
                </Dropdown>
              </Space>
            </>
          );
        },
      },
    ];
    return header;

  }, [dispatch]);
  return {
    columns,
  };
};

export default useRegTableColumn;
