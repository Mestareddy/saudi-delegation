import React from "react";
import type { MenuProps } from "antd";
import {
  GroupOfPeopleIcon,
  ReceiptTextIcon,
  StoreIcon,
  UserIcon,
} from "@/components/icons";

type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const navItems = {
  REGISTRATIONS: getItem(
    <span>Registration</span>,
    "/app/registrations",
    <span className="mr-2">
      <GroupOfPeopleIcon />
    </span>
  ),
  ATTENDEES: getItem(
    <span>Approved Attendees</span>,
    "/app/approved",
    <span className="mr-2">
      <ReceiptTextIcon />
    </span>
  ),
  SPEAKERS: getItem(
    <span>Speakers</span>,
    "/app/speakers",
    <span className="mr-2">
      <UserIcon />
    </span>
  ),
  BOOTHS: getItem(
    <span>Booths</span>,
    "/app/booths",
    <span className="mr-2">
      <StoreIcon />
    </span>
  ),
};

const superAdminNav = [
  navItems.REGISTRATIONS,
  navItems.ATTENDEES,
  navItems.SPEAKERS,
  navItems.BOOTHS,
];

export const menuItemRenderer = () => {
  const items: MenuItem[] = [...superAdminNav];
  return items;
};

export const generateDefaultKey = (path: string) => {
  return path.split("/").splice(0, 3).join("/");
};

export const rootSubmenuKeys = ["sub1", "sub2", "sub3"];
