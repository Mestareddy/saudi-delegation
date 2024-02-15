"use client";
import React, { useState } from "react";
import { Select } from "antd";
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

  const handleChange = (value: string) => {
    setDefaultCountry(value);
  };
  return (
    <Select
      defaultValue={defaultCountry}
      style={{ width: 120, border: "none" }}
      onChange={handleChange}
      options={[
        { value: "nigeria", label: "Nigeria" },
        { value: "saudi", label: "Saudi Arabia" },
      ]}
      dropdownStyle={{ border: "none" }}
    />
  );
};

export default Dropdownitem;
