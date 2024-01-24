import React from 'react'
import { Paragraph } from '../common'
import { CheckedBoxIcon, UnCheckedBoxIcon } from '../icons'
import { TCheckboxes } from './types'


interface BoothFormProps {
  isChecked: boolean;
  hasCheckBoxError: boolean;
  onChecked: (key: keyof TCheckboxes, value: boolean) => void;
}

const BoothForm: React.FunctionComponent<BoothFormProps> = ({ hasCheckBoxError, isChecked, onChecked }) => {
  const handleCheckBox = () => {
    if (isChecked) {
      onChecked("request_booth", false);
    } else {
      onChecked("request_booth", true);
    }
  };
  return (
    <div>
      <button onClick={handleCheckBox}
        className="flex flex-row items-center space-x-[5px]">
        {isChecked ? (
          <CheckedBoxIcon
          />
        ) : (
          <UnCheckedBoxIcon
          />
        )}
        <Paragraph
          className={`font-semibold ${hasCheckBoxError ? "text-red-100" : "text-black-20"
            }`}
        >
          Request a Booth
        </Paragraph>
      </button>
    </div>
  )
}

export default BoothForm
