import React from "react";
import { Paragraph } from "../common";
import { CheckedBoxIcon, UnCheckedBoxIcon } from "../icons";
import { TCheckboxes } from "./types";

interface AcceptTermsCheckboxFormProps {
  isChecked: boolean;
  hasCheckBoxError: boolean;
  onChecked: (key: keyof TCheckboxes, value: boolean) => void;
}

const AcceptTermsCheckboxForm: React.FunctionComponent<AcceptTermsCheckboxFormProps> =
  ({ isChecked, hasCheckBoxError, onChecked }) => {

    const handleCheckBox = () => {
      if (isChecked) {
        onChecked("accept_terms", false);
      } else {
        onChecked("accept_terms", true);
      }
    };

    return (
      <div>
        <div
          onClick={handleCheckBox}
          role="button"
          className="flex flex-row items-center space-x-[5px]"
        >
          {isChecked ? <CheckedBoxIcon /> : <UnCheckedBoxIcon />}
          <Paragraph
            type="body2"
            className={`${hasCheckBoxError ? "text-red-100" : "text-black-20"}`}
          >
            By submitting this form, you agree to our
            <span className="underline mx-1">Terms of Service</span> ,
            <span className="underline">Privacy Policy</span>, and contacting
            you.
          </Paragraph>
        </div>
      </div>
    );
  };

export default AcceptTermsCheckboxForm;
