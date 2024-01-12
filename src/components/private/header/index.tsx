import React from "react";
import { Dropdown, MenuProps, Avatar, Layout, } from "antd";
import { Heading, Paragraph } from "@/components/common";

const { Header } = Layout;

const AppHeader: React.FunctionComponent = () => {

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: (
        <span className="">

        </span>
      ),
      label: "View Profile",
    },
    {
      key: "2",
      icon: (
        <span className="">

        </span>
      ),
      label: "Logout",
    },
  ];
  return (
    <Header className="bg-gray-70 py-4 px-5 flex w-full justify-between items-center">
      <div />
      <div className="gap-x-2.5 flex items-center">
        <Dropdown menu={{ items }} placement="bottom" className="flex h-auto">
          <div className="cursor-pointer flex items-center">
            <Avatar
              size={40}
            />
            <div className="ml-2.5 flex flex-col">
              <Heading type="h2" className="text-sm  font-mono mb-0.5">
                user
              </Heading>
              <Paragraph className="font-normal !text-xs !text-gray-mist-body">
                Adim
              </Paragraph>
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
