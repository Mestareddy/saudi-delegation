"use client";
import React from "react";
import { message, type MenuProps, Dropdown, Space } from "antd";
import { items } from "./data";
import { ArrowDownIcon } from "@/components/icons";

const Dropdownitem = () => {
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  return (
    <Dropdown menu={{ items, onClick }}>
      <div className="text-slate-900 text-base font-semibold font-['SF Pro Display']">
        <Space>
          Select Country
          <ArrowDownIcon />
        </Space>
      </div>
    </Dropdown>
  );
};

export default Dropdownitem;
