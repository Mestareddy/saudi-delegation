// import { MainLayout } from "@/components/layout";
import { Content } from "antd/lib/layout/layout";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Content className="bg-white min-h-screen">
        {/* <MainLayout> */}
        {children}
        {/* </MainLayout> */}
      </Content>
    </div>
  );
};

export default layout;
