import { Divider, theme } from "antd";
import React, { InputHTMLAttributes } from "react";
import { FilterIcon, RoundedCloseIcon, SearchIcon } from "../icons";

const { useToken } = theme;
interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onFilter?: () => void;
  onClear?: () => void;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  onFilter,
  onClear,
  value,
  ...otherInputProps
}) => {
  const { token } = useToken();
  return (
    <div className="flex justify-between items-center bg-gray-50 px-[15px] py-2.5 rounded-lg active:border-green-minst border border-gray-40">
      <div className="flex items-center">
        <span>
          <SearchIcon size="16" color={token.colorText} />
        </span>
        <input
          type="text"
          {...otherInputProps}
          className="placeholder:text-sm ml-2.5 text-gray-minst-main outline-none !border-transparent !focus:border-transparent"
        />
        {value && <RoundedCloseIcon onClick={onClear} size="20" />}
      </div>
      {onFilter && (
        <div className="flex items-center">
          <Divider
            style={{
              height: 22,
            }}
            type="vertical"
          />
          <button
            onClick={onFilter}
            className="hover:opacity-60 cursor-pointer p-0 appearance-none bg-transparent"
          >
            <FilterIcon size="16" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
