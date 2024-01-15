import React, { useState } from "react";
import { Form, Select, Input } from "antd";
import { Paragraph, CustomButton } from "../common";
import { ArrowDownIcon, CheckedBoxIcon, UnCheckedBoxIcon } from "../icons";
import useRegister from "./useRegister";
import { TCheckboxes, TRegisterform } from "./types";
import BusinessDetailsForm from "./BusinessDetailsForm";
import { defaultCheckboxErrors, formItemStyle } from "./utils";
interface RegistrationFormProps {
  /* eslint-disable-next-line */
  onSubmit: (data: TRegisterform) => void;
  isLoading: boolean;
}

const RegistrationForm: React.FunctionComponent<RegistrationFormProps> = ({
  isLoading,
  onSubmit,
}) => {
  const [checkboxes, setCheckBoxes] = useState({
    request_as_speaker: false,
    request_booth: false,
    accept_terms: false,
  });
  const [checkboxErrors, setCheckboxErrors] = useState(defaultCheckboxErrors);
  const {
    countrySWR: { data: countries, isLoading: loadingCountries },
  } = useRegister();

  const handleCheckboxSelect = (key: keyof TCheckboxes, value: boolean) => {
    setCheckBoxes((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (data: TRegisterform) => {
    if (!checkboxes.accept_terms) {
      setCheckboxErrors((prev) => ({ ...prev, accept_terms: true }));
      return;
    }
    setCheckboxErrors(defaultCheckboxErrors);
    onSubmit({
      ...data,
      ...checkboxes,
    });
  };

  return (
    <Form
      disabled={isLoading}
      onFinish={handleFormSubmit}
      className="space-y-5"
      layout="vertical"
      requiredMark={false}
    >
      <div
        style={formItemStyle}
        className="flex flex-col md:flex-row  gap-2.5 md:gap-5 w-full"
      >
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
          name="last_name"
          label="Last name"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your Last name " }]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
      </div>
      <BusinessDetailsForm isLoading={isLoading} />
      <div>
        <Form.Item
          name="nationality"
          label="Country"
          rules={[{ required: true, message: "Please select country" }]}
          style={formItemStyle}
          className="basis-2/4"
        >
          <Select
            suffixIcon={<ArrowDownIcon />}
            placeholder="Select"
            showSearch
            disabled={loadingCountries || isLoading}
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
            {countries?.data.map((state: any) => (
              <Select.Option key={state.id} value={state.id}>
                {state.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div>
        <div className="flex flex-row items-center space-x-[5px]">
          {checkboxes.request_as_speaker ? (
            <CheckedBoxIcon
              onClick={() => handleCheckboxSelect("request_as_speaker", false)}
            />
          ) : (
            <UnCheckedBoxIcon
              onClick={() => handleCheckboxSelect("request_as_speaker", true)}
            />
          )}
          <Paragraph
            className={`font-semibold ${checkboxErrors.request_as_speaker
              ? "text-red-100"
              : "text-black-20"
              }`}
          >
            Request Speaking Opportunity
          </Paragraph>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center space-x-[5px]">
          {checkboxes.request_booth ? (
            <CheckedBoxIcon
              onClick={() => handleCheckboxSelect("request_booth", false)}
            />
          ) : (
            <UnCheckedBoxIcon
              onClick={() => handleCheckboxSelect("request_booth", true)}
            />
          )}
          <Paragraph
            className={`font-semibold ${checkboxErrors.request_booth ? "text-red-100" : "text-black-20"
              }`}
          >
            Request a Booth
          </Paragraph>
        </div>
      </div>
      <div>
        <Form.Item
          name="request_help"
          label="How may we help? "
          className="basis-2/4"
          style={formItemStyle}
          rules={[
            { required: false, message: "Request help field is required" },
          ]}
        >
          <Input placeholder="Type here" />
        </Form.Item>
      </div>
      <div>
        <div className="flex flex-row items-center space-x-[5px]">
          {checkboxes.accept_terms ? (
            <CheckedBoxIcon
              onClick={() => handleCheckboxSelect("accept_terms", false)}
            />
          ) : (
            <UnCheckedBoxIcon
              onClick={() => handleCheckboxSelect("accept_terms", true)}
            />
          )}
          <Paragraph
            type="body2"
            className={`${checkboxErrors.accept_terms ? "text-red-100" : "text-black-20"
              }`}
          >
            By submitting this form, you agree to our
            <span className="underline mx-1">Terms of Service</span> ,
            <span className="underline">Privacy Policy</span>, and contacting
            you.
          </Paragraph>
        </div>
        <div className="h-[1px] w-full bg-gray-60 my-5" />
      </div>
      <Form.Item style={formItemStyle}>
        <CustomButton
          isLoading={isLoading}
          className="text-white-100 w-full md:w-auto sm:w-auto"
        >
          Submit
        </CustomButton>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
