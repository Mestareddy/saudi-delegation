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
  const declined = statusParam?.toLowerCase() === "declined";
  const approved = statusParam?.toLowerCase() === "approved";

  return (
    <div
      className={mergeClassnames(
        "flex items-center gap-x-1 self-start py-1 px-2 rounded-lg",
        pending
          ? "bg-[#FFF7E2]"
          : rejected
          ? "bg-[#FFE5E5]"
          : declined
          ? "bg-[#FFE5E5]"
          : accepted
          ? "bg-[#D8FFF1]"
          : approved
          ? "bg-[#D8FFF1]"
          : ""
      )}
    >
      <div
        className={mergeClassnames(
          "w-2 h-2 rounded-full",
          pending
            ? "bg-[#FFB800]"
            : rejected
            ? "bg-[#FA3636]"
            : declined
            ? "bg-[#FA3636]"
            : accepted
            ? "bg-[#00A36A]"
            : approved
            ? "bg-[#00A36A]"
            : ""
        )}
      />
      <h1
        className={mergeClassnames(
          "capitalize font-[450] text-[16px]",
          pending
            ? "text-[#585A69]"
            : rejected
            ? "text-[#FA3636]"
            : declined
            ? "text-[#FA3636]"
            : accepted
            ? "text-[#00A36A]"
            : approved
            ? "text-[#00A36A]"
            : ""
        )}
      >
        {acceptanceStatus}
      </h1>
    </div>
  );
};

export default StatusBox;
