"use client";
import React, { useState } from "react";
import { Form, Select, Input } from "antd";
import { ArrowDownIcon } from "../icons";
import { COMPANY_SIZE, formItemStyle, INDUSRY } from "./utils";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";

interface BusinessDetailsFormProps {
  isLoading: boolean;
}

const BusinessDetailsForm: React.FunctionComponent<
  BusinessDetailsFormProps
> = ({ isLoading }) => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);

  // Map the data to match react-select format
  const options = INDUSRY.map((industry) => ({
    value: industry.id, // Use code as unique identifier
    label: industry.name, // Use name as the displayed label
  }));
  return (
    <>
      <div className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full">
        <Form.Item
          name="job_title"
          label="Your Job Title"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your job!" }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item
          name="company_name"
          label="Company Name"
          className="basis-2/4"
          style={formItemStyle}
          rules={[
            { required: true, message: "Please input your company Name!" },
          ]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
      </div>
      <div className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full">
        <Form.Item
          name="business_email"
          label="Company Email"
          className="basis-2/4"
          style={formItemStyle}
          rules={[
            { required: true, message: "Please input your company Email!" },
          ]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item
          name="business_phone"
          label="Company Phone Number"
          className="basis-2/4"
          style={formItemStyle}
          rules={[
            {
              required: true,
              message: "Please input your company phone number!",
            },
            // {
            //   pattern: /^0\d{10}$/,
            //   message: "Must be a valid phone number e.g 081xxxx",
            // },
          ]}
        >
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            inputStyle={{
              width: "100%",
              paddingRight: "2.5rem",
              // height: "57px",
            }} // Adjust input width and padding
            buttonStyle={{
              position: "absolute",
              right: 0,
              top: 0,
            }} // Position the icon
            style={{
              height: "59px",
              border: "1px solid #d9d9d9",
              paddingLeft: "5px",
            }}
            className="!h-[59px]"
          />
        </Form.Item>
      </div>
      <div className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full">
        <Form.Item
          name="company_size"
          label="Company size:"
          rules={[{ required: true, message: "Please select company size:" }]}
          style={formItemStyle}
          className="basis-2/4"
        >
          <Select
            suffixIcon={<ArrowDownIcon />}
            placeholder="Select"
            showSearch
            disabled={isLoading}
          >
            {COMPANY_SIZE.map((state: any) => (
              <Select.Option key={state.id} value={state.name}>
                {state.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="industry"
          label="Industry"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your industry!" }]}
        >
          <Select
            suffixIcon={<ArrowDownIcon />}
            placeholder="Select"
            showSearch
            disabled={isLoading}
            optionFilterProp="children"
            // filterOption={(input, option: any) =>
            //   (option?.children.toLowerCase() ?? "").includes(input)
            // }
            // filterSort={(optionA: any, optionB: any) => {
            //   return (optionA?.children ?? "")
            //     .toLowerCase()
            //     .localeCompare((optionB?.children ?? "").toLowerCase());
            // }}
          >
            {INDUSRY.map((state: any) => (
              <Select.Option key={state.id} value={state.name}>
                {state.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </>
  );
};

export default BusinessDetailsForm;
