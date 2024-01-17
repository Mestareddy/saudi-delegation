import { Tabs, TabsProps } from "antd";
import React from "react";
import { TAttendeeStatus } from "../types";

interface RegistrationTabProps {
  /* eslint-disable-next-line */
  onTabSelect?: (key: TAttendeeStatus) => void;
  defaultKey?: string;
}

const RegistrationTab: React.FunctionComponent<RegistrationTabProps> = ({
  onTabSelect,
  defaultKey,
}) => {
  const onChange = (key: string) => {
    if (onTabSelect) {
      onTabSelect(key as TAttendeeStatus);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "register",
      label: "Submissions",
    },
    {
      key: "reject",
      label: "Declined Registrations",
    },
  ];

  return (
    <Tabs
      tabBarStyle={{
        fontWeight: 600,
      }}
      tabBarGutter={30}
      defaultActiveKey={defaultKey}
      items={items}
      onChange={onChange}
    />
  );
};

export default RegistrationTab;
