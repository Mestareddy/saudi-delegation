"use client";
import React, { lazy } from "react";

const TableSkeletonAppLayout = lazy(
  () => import("../../components/common/TableSkeleton")
);

const Loading: React.FunctionComponent = () => {
  return <TableSkeletonAppLayout active columnCount={7} rowCount={16} />;
};

export default Loading;
