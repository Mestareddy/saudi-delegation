"use client";
import React from "react";
import {
  createCache,
  extractStyle,
  StyleProvider,
} from "@ant-design/cssinjs/lib";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";
import { ConfigProvider, ThemeConfig } from "antd";
import { customThemeColor } from "@/constants";
import StoreProvider from "@/app/StoreProvider";

const { primary, gray, white } = customThemeColor;

const appTheme: ThemeConfig = {
  token: {
    colorPrimary: primary[100],
    colorPrimaryHover: primary[200],
    colorTextHeading: gray[10],
    colorTextLabel: gray[10],
    colorTextPlaceholder: gray[30],
    colorTextSecondary: gray[30],
    colorText: gray[10],
    colorFillTertiary: gray[10],
  },
  components: {
    Form: {
      fontWeightStrong: 500,
    },
    Button: {
      fontSize: 16,
      paddingInline: 40,
      controlHeight: 49,
      borderRadius: 30,
      lineHeight: 1,
      algorithm: true,
      defaultBg: white[100],
      defaultColor: white[100],
      defaultBorderColor: white[100],
      colorBgTextHover: primary[100],
      colorPrimary: gray[10],
      colorPrimaryHover: primary[200],
      colorPrimaryActive: primary[400],
      colorText: white[100],
      textHoverBg: gray[10],
      colorBgTextActive: white[100],
      colorTextDisabled: white[100],
    },
    Input: {
      paddingBlock: 16,
      paddingInline: 10,
      borderRadius: 0,
      fontSize: 16,
      colorText: gray[10],
      colorBgContainer: white[100],
      fontWeightStrong: 400,
      colorBorderBg: gray[10],
      colorTextPlaceholder: gray[30],
      colorBgContainerDisabled: gray[30],
      margin: 0,
      colorPrimaryActive: gray[10],
      controlHeight: 44,
    },
    Select: {
      controlHeight: 59,
      colorBgContainer: white[100],
      controlPaddingHorizontal: 16,
      fontSize: 16,
      colorText: gray[10],
      fontWeightStrong: 400,
      colorBorderBg: gray[10],
      borderRadius: 0,
    },
    Layout: {
      headerBg: gray[10],
      headerPadding: "4px 20px",
      headerHeight: 60,
      bodyBg: gray[10],
      siderBg: primary[100],
    },
    Modal: {
      borderRadius: 0,
      borderRadiusSM: 0,
      borderRadiusLG: 0,
      borderRadiusXS: 0,
      borderRadiusOuter: 0,
      paddingContentHorizontal: 0,
      boxShadow: ' 0px 10px 20px 0px rgba(0, 0, 0, 0.25)'
    }

  }
}

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);

  useServerInsertedHTML(() => {
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });
  return (
    <StyleProvider cache={cache} hashPriority="high" autoClear>
      <ConfigProvider theme={appTheme}>
        <StoreProvider>{children}</StoreProvider>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;
