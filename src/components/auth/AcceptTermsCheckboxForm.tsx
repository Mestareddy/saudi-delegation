import React from "react";
import { Paragraph } from "../common";
import { CheckedBoxIcon, UnCheckedBoxIcon } from "../icons";
import { TCheckboxes } from "./types";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { toggleRegisterModalClose } from "@/lib/features/registerModalSlice";

interface AcceptTermsCheckboxFormProps {
  isChecked: boolean;
  hasCheckBoxError: boolean;
  onChecked: (key: keyof TCheckboxes, value: boolean) => void;
}

const AcceptTermsCheckboxForm: React.FunctionComponent<
  AcceptTermsCheckboxFormProps
> = ({ isChecked, hasCheckBoxError, onChecked }) => {
  const handleCheckBox = () => {
    if (isChecked) {
      onChecked("accept_terms", false);
    } else {
      onChecked("accept_terms", true);
    }
  };

  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(toggleRegisterModalClose());
  };

  return (
    <div>
      <div
        role="button"
        onClick={handleCheckBox}
        className="flex flex-row items-center space-x-[5px] cursor-pointer"
      >
        <div className="w-[18px]">
          {isChecked ? (
            <CheckedBoxIcon size="18" />
          ) : (
            <UnCheckedBoxIcon size="18" />
          )}
        </div>
        <Paragraph
          type="body2"
          className={`${hasCheckBoxError ? "text-red-100" : "text-black-20"}`}
        >
          By submitting this form, you agree to our
          <Link
            href={"/terms&conditions"}
            className="!text-black-20 !underline mx-1"
            onClick={handleCancel}
          >
            Terms of Service
          </Link>{" "}
          ,
          <Link
            href={"/terms&conditions"}
            className="!text-black-20 !underline"
            onClick={handleCancel}
          >
            Privacy Policy
          </Link>
          , and contacting you.
        </Paragraph>
      </div>
    </div>
  );
};

export default AcceptTermsCheckboxForm;
