"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { UserPreDefinedRole } from "@/types/auth";
import {
  generateDefaultKey,
  menuItemRenderer,
  rootSubmenuKeys,
} from "./helper";
import { CustomButton, Paragraph } from "@/components/common";
import { LogoutIcon } from "@/components/icons";
import { useAuth } from "@/components/hooks";

const { Sider } = Layout;

interface SideNavProps {
  role?: UserPreDefinedRole;
}

const SideNav: React.FunctionComponent<SideNavProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [collapsed, setCollapsed] = useState(false);
  const { lg } = useBreakpoint();
  const { logout } = useAuth();

  useEffect(() => {
    if (lg) {
      setCollapsed(false);
    }
  }, [lg]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider
      className="sidebar h-screen !w-[250px] !bg-gray-70"
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapsed}
      // onBreakpoint={(broken) => {
      //   console.log(broken);
      // }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
        setCollapsed(collapsed);
      }}
      style={{ zIndex: 99 }}
      width={230}
    >
      <>
        <div className="">
          <div className="w-full flex flex-col justify-between h-full py-6 gap-y-3 mt-10 items-center">
            <div>
              <Image
                src="/images/nigeria_saudi_arabia_logo.png"
                alt="nigeria_saudi_arabia_logo_outlined"
                width={98}
                height={40}
                className="mx-auto w-auto"
                priority
              />
            </div>
            <div className="bg-gray-70 border border-gray-70 h-[1px] w-[90%] mt-5 mb-7" />
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              items={menuItemRenderer()}
              onClick={({ key }) => router.push(key)}
              defaultSelectedKeys={[generateDefaultKey(pathname)]}
              style={{
                background: "#E0E0E0",
                fontWeight: "600",
                fontSize: 14,
                lineHeight: 22,
                paddingLeft: 10,
              }}
            />
          </div>
        </div>
        <CustomButton
          variant="noStyleButton"
          onClick={logout}
          className="absolute flex flex-row  items-center bottom-0 mb-5 py-5 px-[15px] rounded-none !ml-2"
        >
          <LogoutIcon />
          <Paragraph className="text-sm font-semibold !ml-[10px] !pl-2">
            Logout
          </Paragraph>
        </CustomButton>
      </>
    </Sider>
  );
};

export default SideNav;
