"use client";
import useAuth from "@/components/hooks/useAuth";
import { apiErrorHandler } from "@/services";
import { Alert, Form, Input, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
// import Input from "rc-input";
import React, { useState } from "react";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { CustomButton } from "@/components/common";

type FormValues = {
  code: string;
  newPassword: string;
  confirmPassword: boolean;
};

const passwordReqexPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const ResetPasswordForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    resetTokenSWR: { error, isMutating, trigger },
  } = useAuth();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const handleResetCode = (values: FormValues) => {
    const data = {
      email,
      code: values?.code,
      // confirm_password: values?.confirmPassword,

      new_password: values.newPassword,
    };
    trigger({ data })
      .then(() => {
        message.open({
          type: "success",
          content: "Email successfully verified",
        });
        router.push(`/auth/success`);
      })
      .catch(() => {
        message.open({
          type: "error",
          content: apiErrorHandler(error),
        });
      });
  };

  return (
    <div>
      {error && (
        <Alert
          className="mb-2"
          message={apiErrorHandler(error)}
          type="error"
          showIcon
          closable
        />
      )}
      <Form layout="vertical" onFinish={handleResetCode} requiredMark={false}>
        <Form.Item
          name="code"
          label="OTP Code"
          rules={[{ required: true, message: "Please input your code" }]}
        >
          <Input
            // type="text"
            disabled={isMutating}
            placeholder="Enter OTP Code"
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            { required: true, message: "Please input your Password!" },
            {
              pattern: passwordReqexPattern,
              message:
                "password must contain lower case, uppper case, number, symbols and a min. of 8 characters",
            },
          ]}
        >
          <Input
            suffix={
              <EyeInvisibleOutlined
                onClick={() => setShowPassword(!showPassword)}
              />
            }
            type={showPassword ? "text" : "password"}
            disabled={isMutating}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input
            suffix={
              <EyeInvisibleOutlined
                onClick={() => setShowPassword(!showPassword)}
              />
            }
            disabled={isMutating}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }} className="mt-4">
          <CustomButton
            disabled={isMutating}
            isLoading={isMutating}
            className="w-full"
          >
            Reset Password
          </CustomButton>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
