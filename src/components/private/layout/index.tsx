"use client";
import React from "react";
import { Layout as AntLayout } from "antd";
import SideNav from "../sidenav";
import AppHeader from "../header";
import { User, UserPreDefinedRole } from "@/types/auth";

const { Content } = AntLayout;

type Props = {
  user: User | null;
  children: React.ReactNode;
};

function Layout({ children, user }: Props) {
  return (
    <AntLayout className="!bg-gray-70">
      <div className="h-screen flex w-full">
        <SideNav role={user?.["role.name"] as UserPreDefinedRole} />
        <AntLayout className="flex flex-col bg-gray-70 h-screen overflow-y-scroll w-full">
          <AppHeader />
          <Content className="w-full px-5 pt-6">{children}</Content>
        </AntLayout>
      </div>
    </AntLayout>
  );
}

export default Layout;