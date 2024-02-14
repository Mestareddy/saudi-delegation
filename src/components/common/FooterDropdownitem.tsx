"use client";
import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { ArrowDownIcon } from "@/components/icons";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    title: "Nigeria",
    key: "1",
  },
  {
    title: "Saudi Arabia",
    key: "2",
  },
];

const Dropdownitem = () => {
  const [defaultCountry, setDefaultCountry] = useState("Nigeria");
  const onClick: MenuProps["onClick"] = ({ key }) => {
    setDefaultCountry(key);
  };
  return (
    <Dropdown menu={{ items, onClick }}>
      <div className="text-slate-900 text-base font-semibold font-['SF Pro Display']">
        <Space>
          {defaultCountry}
          <ArrowDownIcon />
        </Space>
      </div>
    </Dropdown>
  );
};

export default Dropdownitem;
