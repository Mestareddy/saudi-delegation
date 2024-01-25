import { Paragraph } from "@/components/common";
import { CircleCloseIcon, MoreIcon, TickCircleIcon } from "@/components/icons";
import {
  setRegistrantAction,
  toggleRegistrantApproveModal,
  toggleRegistrantDeclineModal,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch } from "@/lib/hooks";
import { EventAttendee } from "@/types/attendee";
import { MenuProps, Space } from "antd";
import Dropdown from "antd/es/dropdown/dropdown";
import React from "react";

interface AttendeeTableActionProps {
  record: EventAttendee;
}

const AttendeeTableAction: React.FunctionComponent<AttendeeTableActionProps> =
  ({ record }) => {
    const dispatch = useAppDispatch();
    const onAccept = (id: string) => {
      dispatch(toggleRegistrantApproveModal(true));
      dispatch(
        setRegistrantAction({
          action: "approve",
          event: "attendee",
          registrantId: id,
        })
      );
    };
    const onDecline = (id: string | number) => {
      dispatch(toggleRegistrantDeclineModal(true));
      dispatch(
        setRegistrantAction({
          action: "reject",
          event: "attendee",
          registrantId: id,
        })
      );
    };
    const handleMenuClick: MenuProps["onClick"] = (event) => {
      const itemKey = event.key;
      if (itemKey) {
        switch (itemKey) {
          case "1":
            onAccept(record.id as string);
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
  };

export default AttendeeTableAction;
