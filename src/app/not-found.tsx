"use client";
import Link from "next/link";
import React from "react";
import { Button, Layout, Result } from "antd";
import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  margin: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const NotFound = () => {
  return (
    <Layout className="w-[100vw] mt-[100px]">
      <Header />
      <Layout>
        <Content style={contentStyle}>
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <div className="w-full flex justify-center items-center">
                <Link href="/">
                  <Button type="primary" className="bg-green-minst">
                    Return Home
                  </Button>
                </Link>
              </div>
            }
          />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default NotFound;
