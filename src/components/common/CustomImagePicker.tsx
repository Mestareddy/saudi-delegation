import { fileSizeValidator } from "@/util";
import { message } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { CameraIcon } from "../icons";
import CustomButton from "./CustomButton";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface CustomImagePickerProps {
  onSelectFile: (file: string) => void;
}

const CustomImagePicker: React.FunctionComponent<CustomImagePickerProps> = ({
  onSelectFile,
}) => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUri, setPreviewUri] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const response = fileSizeValidator(fileSize, 3);

    if (response) {
      message.open({
        type: "error",
        content: response,
      });
      return;
    }

    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        onSelectFile(reader.result as string);
        setPreviewUri(reader.result);
        setLoading(false);
      };

      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-row items-center mt-5">
      <input
        type="file"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      {previewUri ? (
        <div className="h-[140px] w-[140px] bg-center rounded-[10px]">
          <Image
            alt="upload"
            src={previewUri as string}
            width={140}
            height={140}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <button
          onClick={triggerFileInput}
          className="flex flex-col items-center justify-center rounded-[10px] border border-gray-40 h-[140px] w-[140px]"
        >
          <CameraIcon />
        </button>
      )}
      <div className="ml-5">
        <Heading className="text-xl font-mono">Profile Picture</Heading>
        <Paragraph type="body2" className="text-gray-80 my-[15px]">
          JPG, PNG or PDF, file size no more than 10MB
        </Paragraph>
        {loading ? (
          <Paragraph type="body2" className="text-gray-80 my-[15px]">
            Uploading...
          </Paragraph>
        ) : (
          <CustomButton className="uppercase" onClick={triggerFileInput}>
            {previewUri ? "Replace" : "Upload Picture"}
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default CustomImagePicker;
