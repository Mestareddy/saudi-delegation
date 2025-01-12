"use client";
import React from "react";
import { Layout as AntLayout } from "antd";
import SideNav from "../sidenav";
import AppHeader from "../header";
import { User } from "@/types/auth";
import RegistrantDetailsModal from "@/components/attendee/RegistrantDetailsModal";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

const { Content } = AntLayout;

type Props = {
  user: User | null;
  children: React.ReactNode;
};

function Layout({ children, user }: Props) {
  const registrantModalStatus = useAppSelector(
    (state: RootState) =>
      state.registrantDetailsModalSlice.registrantDetailsModal
  );
  return (
    <AntLayout className="!bg-gray-70">
      <div className="h-screen flex w-full">
        <SideNav role={user?.role} />
        <AntLayout className="flex flex-col !bg-gray-70 h-screen overflow-y-scroll w-full">
          <AppHeader />
          <Content className="w-full p-2.5">{children}</Content>
        </AntLayout>
        <RegistrantDetailsModal registrantModalStatus={registrantModalStatus} />
      </div>
    </AntLayout>
  );
}

export default Layout;
