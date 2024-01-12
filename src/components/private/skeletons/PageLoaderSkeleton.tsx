import React from "react";
import { SpinLoader } from "@/components/icons";

const PageLoader: React.FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen text-green-minst">
      <SpinLoader size="56" />
    </div>
  );
}

export default PageLoader;
