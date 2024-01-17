import React from "react";
import { mergeClassnames } from "@/util";

type StatusBoxProps = {
  acceptanceStatus?: string;
};

const StatusBox = ({ acceptanceStatus }: StatusBoxProps) => {
  const statusParam = acceptanceStatus && acceptanceStatus;
  const pending = statusParam?.toLowerCase() === "pending";
  const accepted = statusParam?.toLowerCase() === "accepted";
  const rejected = statusParam?.toLowerCase() === "rejected";

  return (
    <div
      className={mergeClassnames(
        "flex items-center gap-x-1 self-start py-1 px-2 rounded-lg",
        pending
          ? "bg-[#FFF7E2]"
          : rejected
          ? "bg-[#FFE5E5]"
          : accepted
          ? "bg-[#FFE5E5]"
          : "bg-[#D8FFF1]"
      )}
    >
      <div
        className={mergeClassnames(
          "w-2 h-2 rounded-full",
          pending
            ? "bg-[#FFB800]"
            : rejected
            ? "bg-[#FA3636]"
            : accepted
            ? "bg-[#00A36A]"
            : "bg-[#00A36A]"
        )}
      />
      <h1
        className={mergeClassnames(
          "capitalize font-[450] text-[16px]",
          rejected ? "text-[#FA3636]" : "text-[#585A69]"
        )}
      >
        {acceptanceStatus}
      </h1>
    </div>
  );
};

export default StatusBox;
