import React, { useState } from "react";
import { Form, Select, Input } from "antd";
import { Paragraph } from "../common";
import { ArrowDownIcon, CheckedBoxIcon, UnCheckedBoxIcon } from "../icons";
import CustomButton from "../common/CustomButton";

const formItemStyle = { marginBlock: "0px", marginInline: '0px' };

const RegistrationForm: React.FunctionComponent = () => {
  const [requestSpeaking, setRequestSpeaking] = useState(false)
  const [requestBooth, setRequestBooth] = useState(false)
  return (
    <Form className="space-y-5" layout="vertical" requiredMark={false}>
      <div style={formItemStyle} className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full">
        <Form.Item
          name="first_name"
          label="First name"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your First name " }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item
          name="job"
          label="Your Job Title"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your job!" }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
      </div>
      <div className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full">
        <Form.Item
          name="company_name"
          label="Company Name"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your company Name!" }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item
          name="company_email"
          label="Company Email"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your company Email!" }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
      </div>
      <div className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full">
        <Form.Item
          name="company_phone_number"
          label="Company Phone Number"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your company phone number!" }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item
          name="company_size"
          label="Company size:"
          rules={[
            { required: true, message: "Please select company size:" },
          ]}
          style={formItemStyle}
          className="basis-2/4"
        >
          <Select
            suffixIcon={<ArrowDownIcon />}
            placeholder="Select"
            showSearch
            optionFilterProp="children"
            filterOption={(input, option: any) =>
              (option?.children.toLowerCase() ?? "").includes(input)
            }
            filterSort={(optionA: any, optionB: any) => {
              return (optionA?.children ?? "")
                .toLowerCase()
                .localeCompare((optionB?.children ?? "").toLowerCase());
            }}
          >
            {[].map((state: any) => (
              <Select.Option key={state.id} value={state.id}>
                {state.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full">
        <Form.Item
          name="industry"
          label="Industry"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your industry!" }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          rules={[
            { required: true, message: "Please select country" },
          ]}
          style={formItemStyle}
          className="basis-2/4"
        >
          <Select
            suffixIcon={<ArrowDownIcon />}
            placeholder="Select"
            showSearch
            optionFilterProp="children"
            filterOption={(input, option: any) =>
              (option?.children.toLowerCase() ?? "").includes(input)
            }
            filterSort={(optionA: any, optionB: any) => {
              return (optionA?.children ?? "")
                .toLowerCase()
                .localeCompare((optionB?.children ?? "").toLowerCase());
            }}
          >
            {[].map((state: any) => (
              <Select.Option key={state.id} value={state.id}>
                {state.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div>
        <Form.Item style={formItemStyle} name="request_speaking" valuePropName="checked" noStyle>
          <div className="flex flex-row items-center space-x-[5px]">
            {requestSpeaking ? <CheckedBoxIcon onClick={() => setRequestSpeaking(false)} /> : <UnCheckedBoxIcon onClick={() => setRequestSpeaking(true)} />}
            <Paragraph className="font-semibold">Request Speaking Opportunity</Paragraph>
          </div>
        </Form.Item>
      </div>
      <div>
        <Form.Item style={formItemStyle} name="request_booth" valuePropName="checked" noStyle>
          <div className="flex flex-row items-center space-x-[5px]">
            {requestBooth ? <CheckedBoxIcon onClick={() => setRequestBooth(false)} /> : <UnCheckedBoxIcon onClick={() => setRequestBooth(true)} />}
            <Paragraph className="font-semibold">Request a Booth</Paragraph>
          </div>
        </Form.Item>
      </div>
      <div>
        <Form.Item
          name="help"
          label="How may we help? "
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "field is required" }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
      </div>
      <div>
        <Paragraph type="body2" className="text-black-20">
          By submitting this form, you agree to our Terms of <span className="underline">Service</span> , <span className="underline">Privacy Policy</span>, and contacting you.
        </Paragraph>
        <div className="h-[1px] w-full bg-gray-60 my-5" />
      </div>
      <Form.Item style={formItemStyle}>
        <CustomButton buttonText={"Submit"} className="w-full" />
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
