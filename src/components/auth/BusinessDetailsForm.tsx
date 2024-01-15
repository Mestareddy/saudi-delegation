import React from 'react'
import { Form, Select, Input } from "antd";
import { ArrowDownIcon } from '../icons';
import { COMPANY_SIZE, formItemStyle, INDUSRY } from './utils';


interface BusinessDetailsFormProps {
  isLoading: boolean
}

const BusinessDetailsForm: React.FunctionComponent<BusinessDetailsFormProps> = ({ isLoading }) => {
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
            {
              pattern: /^0\d{10}$/,
              message:
                "Must be a valid phone number e.g 081xxxx",
            },
          ]}
        >
          <Input type="number" placeholder="Type here" />
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
            filterOption={(input, option: any) =>
              (option?.children.toLowerCase() ?? "").includes(input)
            }
            filterSort={(optionA: any, optionB: any) => {
              return (optionA?.children ?? "")
                .toLowerCase()
                .localeCompare((optionB?.children ?? "").toLowerCase());
            }}
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
  )
}

export default BusinessDetailsForm
