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

const { Sider } = Layout;

interface SideNavProps {
  role?: UserPreDefinedRole
}

const SideNav: React.FunctionComponent<SideNavProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [collapsed, setCollapsed] = useState(false);
  const { lg } = useBreakpoint();

  useEffect(() => {
    if (lg) {
      setCollapsed(false);
    }
  }, [lg]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
      collapsed={collapsed}
      width={250}
      className="h-screen !bg-gray-70"
      style={{ paddingTop: 32, background: "#E0E0E0" }}
    >
      {!lg && (
        <div className="flex items-end justify-between" style={{ padding: 16 }}>
          <div />
          <button className="bg-white" onClick={toggleCollapsed}>
            {/* {collapsed ? <Hambuger size="18" /> : <Close size="18" />} */}
          </button>
        </div>
      )}
      <div className="w-full flex flex-col py-6 gap-y-12">
        <div>
          <Image
            src="/images/app_logo_green.png"
            alt="nigeria_saudi_arabia_logo_outlined"
            width={98}
            height={40}
            className="mx-auto w-auto"
            priority
          />
        </div>
        <div className="bg-gray-70 border h-[1p] w-full my-10" />
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          defaultSelectedKeys={[generateDefaultKey(pathname)]}
          onClick={({ key }) => router.push(key)}
          items={menuItemRenderer()}
          style={{ background: "#E0E0E0", fontWeight: '600', fontSize: 14, lineHeight: 22 }}
        />
      </div>
    </Sider>
  );
}

export default SideNav;
