import React from "react";
import { Skeleton } from "antd";

const { Avatar, Input } = Skeleton;

const SideNavSkeletion: React.FunctionComponent = () => {
  return (
    <div className="w-[250px] bg-green-minst pt-8 flex flex-col gap-y-12 items-center">
      <Avatar active size="large" className="[&>span]:!w-16 [&>span]:!h-16" />
      <div className="self-stretch flex flex-col gap-y-2.5 items-stretch [&_div]:!w-full [&_span]:!w-full  [&_span]:!h-[52px]">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <Input active />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNavSkeletion;
