import React from "react";
import { Dropdown, MenuProps, Avatar, Layout } from "antd";
import { Heading, Paragraph } from "@/components/common";
import { LogoutIcon, NotificationIcon, UserIcon } from "@/components/icons";
import useLogin from "@/components/hooks/useLogin";

const { Header } = Layout;

const AppHeader: React.FunctionComponent = () => {
  const { user, logout } = useLogin()

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: (
        <span>
          <UserIcon />
        </span>
      ),
      label: <Paragraph className="font-semibold">View Profile</Paragraph>,
    },
    {
      key: "2",
      icon: (
        <span>
          <LogoutIcon onClick={logout} role="button" />
        </span>
      ),
      label: <Paragraph className="font-semibold">Logout</Paragraph>,
    },
  ];
  return (
    <Header className="!bg-gray-70 py-2.5 px-2.5 flex w-full justify-between items-center">
      <div />
      <div className="gap-x-2.5 flex items-center">
        <div className="p-3.5">
          <NotificationIcon />
        </div>
        <Dropdown menu={{ items }} placement="bottom" className="flex h-auto">
          <div className="cursor-pointer flex items-center">
            <Avatar
              size={40}
              style={{
                borderRadius: 15,
              }}
            />
            <div className="flex flex-col px-2.5">
              <Heading
                type="btn"
                className="text-sm  font-medium font-robot mb-0.5"
              >
                {user?.first_name}
              </Heading>
              <Paragraph className="font-normal !text-sm !text-gray-80">
                {user?.role}
              </Paragraph>
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
