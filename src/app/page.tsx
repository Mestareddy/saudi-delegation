import React from "react";
import { PageHeader } from "@/components/common";


const page: React.FunctionComponent = () => {
  return (
    <>
      <PageHeader title="home page" description="home page" />
      <div className="bg-black h-screen">
        <h1 className="text-4xl">Saudi Websitee</h1>
      </div>
    </>
  );
}

export default page;
