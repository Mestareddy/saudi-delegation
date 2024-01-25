import React from "react";
import { Form, Input } from "antd";
import { CustomImagePicker, Paragraph } from "../common";
import { CheckedBoxIcon, UnCheckedBoxIcon } from "../icons";
import { formItemStyle } from "./utils";
import { TCheckboxes } from "./types";

interface SpeakerFormProps {
  isChecked: boolean;
  hasCheckBoxError: boolean;
  onChecked: (key: keyof TCheckboxes, value: boolean) => void;
  onSelectFile: (file: string) => void;
}

const SpeakerForm: React.FunctionComponent<SpeakerFormProps> = ({
  isChecked,
  onChecked,
  hasCheckBoxError,
  onSelectFile,
}) => {

  const handleCheckBox = () => {
    if (isChecked) {
      onChecked("request_as_speaker", false);
    } else {
      onChecked("request_as_speaker", true);
    }
  };

  return (
    <>
      <div
        role="button"
        onClick={handleCheckBox}
        className="flex flex-row items-center space-x-[5px] cursor-pointer"
      >
        {isChecked ? <CheckedBoxIcon /> : <UnCheckedBoxIcon />}
        <Paragraph
          className={`font-semibold ${hasCheckBoxError ? "text-red-100" : "text-black-20"
            }`}
        >
          Request Speaking Opportunity
        </Paragraph>
      </div>
      {isChecked && (
        <>
          <CustomImagePicker onSelectFile={onSelectFile} />
          <div>
            <Form.Item
              name="bio"
              label="Bio*"
              rules={[
                {
                  required: isChecked,
                  message: "Please input your bio",
                },
              ]}
            >
              <Input.TextArea rows={10} />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="speaker_topic"
              label="Topic you want to speak on"
              className="basis-2/4"
              style={formItemStyle}
              rules={[
                { required: isChecked, message: "Please input the topic you want to speak on" },
              ]}
            >
              <Input placeholder="Type here" />
            </Form.Item>
          </div>
        </>
      )}
    </>
  );
};

export default SpeakerForm;
