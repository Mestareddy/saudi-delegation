import { Tabs, TabsProps } from "antd";
import React from "react";

interface RegistrationTabProps {
  /* eslint-disable-next-line */
  onTabSelect?: (key: string) => void;
  defaultKey?: string;
}

const RegistrationTab: React.FunctionComponent<RegistrationTabProps> = ({
  onTabSelect,
  defaultKey,
}) => {
  const onChange = (key: string) => {
    if (onTabSelect) {
      onTabSelect(key);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "Submissions",
      label: "Submissions",
    },
    {
      key: "Declined Registrations",
      label: "Declined Registrations",
    },
  ];
  return (
    <Tabs
      tabBarStyle={{
        fontWeight: 600,
        // paddingInline: 30,
        // marginBottom: 40
      }}
      tabBarGutter={30}
      defaultActiveKey={defaultKey}
      items={items}
      onChange={onChange}
    />
  );
};

export default RegistrationTab;
