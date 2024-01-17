"use client";
import { TableSkeleton } from "@/components/common";
import React from "react";

function Loading() {
  return <TableSkeleton title active columnCount={7} rowCount={15} />;
}

export default Loading;
