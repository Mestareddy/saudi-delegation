"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginForm = () => {
  const [clientReady, setClientReady] = useState<boolean>(false);
  // To disable submit button at the beginning.
  const [form] = Form.useForm();

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setClientReady(true);
      },
      () => {
        setClientReady(false);
      }
    );
  }, [values]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      className="!w-full !my-5"
      style={{ width: "100%" }}
    >
      <Form.Item<FieldType>
        label={
          <h3 className="text-[14px] leading-[17.71px] font-medium">Email</h3>
        }
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input className="w-full !border-[#333333]" placeholder="Enter email" />
      </Form.Item>

      <Form.Item<FieldType>
        label={
          <h3 className="text-[14px] leading-[17.71px] font-medium">
            Password
          </h3>
        }
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          placeholder="Enter password"
          className="w-full !border-[#333333]"
        />
      </Form.Item>

      <Form.Item className="flex justify-center">
        <Link
          href={"/auth/forgot-password"}
          className="!text-[#121212] !text-[14px] !leading-[17.71px] !font-bold !text-center"
        >
          Forgot Password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!clientReady}
          className="!m-0 !w-full !bg-[#11142D] hover:!bg-green-500 !text-white"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
