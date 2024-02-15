import React, { useState } from "react";
import { Form, Select, Input, message } from "antd";
import { CustomButton } from "../common";
import { ArrowDownIcon } from "../icons";
import useRegister from "../hooks/useRegister";
import { TCheckboxes, TRegisterform } from "./types";
import BusinessDetailsForm from "./BusinessDetailsForm";
import { defaultCheckboxErrors, formItemStyle } from "./utils";
import SpeakerForm from "./SpeakerForm";
import BoothForm from "./BoothForm";
import RequestHelpForm from "./RequestHelpForm";
import AcceptTermsCheckboxForm from "./AcceptTermsCheckboxForm";
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
  const [imageFile, setImageFile] = useState<string | undefined>(undefined);
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
    if (checkboxes.request_as_speaker && !imageFile) {
      message.open({
        type: "error",
        content: "speaker image is required",
      });
      return;
    }

    setCheckboxErrors(defaultCheckboxErrors);
    // console.log("data", data);

    onSubmit({
      ...data,
      ...checkboxes,
      speaker_profile_image: imageFile,
    });
  };

  const handleSelectImage = (file: string) => {
    setImageFile(file);
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
          hasFeedback
        >
          <Input placeholder="Type here" />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Last name"
          className="basis-2/4"
          style={formItemStyle}
          rules={[{ required: true, message: "Please input your Last name " }]}
          hasFeedback
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
          hasFeedback
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
      <div className="border border-gray-60" />
      <SpeakerForm
        hasCheckBoxError={checkboxErrors.request_as_speaker}
        isChecked={checkboxes.request_as_speaker}
        onChecked={handleCheckboxSelect}
        onSelectFile={handleSelectImage}
      />
      <div className="border border-gray-60" />
      <BoothForm
        hasCheckBoxError={checkboxErrors.request_booth}
        isChecked={checkboxes.request_booth}
        onChecked={handleCheckboxSelect}
      />
      <div className="border border-gray-60" />
      <RequestHelpForm />
      <AcceptTermsCheckboxForm
        hasCheckBoxError={checkboxErrors.accept_terms}
        isChecked={checkboxes.accept_terms}
        onChecked={handleCheckboxSelect}
      />
      <div className="border border-gray-60 mt-5" />
      <Form.Item style={{ marginTop: 20 }}>
        <CustomButton
          type="submit"
          isLoading={isLoading}
          className="text-white-100 w-full md:w-2/4 sm:w-auto"
        >
          Submit
        </CustomButton>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
