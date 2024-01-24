"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Modal } from "antd";
import React from "react";
import { toggleMenuClose } from "../../../lib/features/menuModalSlice";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import { CustomButton } from "@/components/common";

const MenuModal = () => {
  const menuStatus = useAppSelector(
    (state: RootState) => state.menuModalSlice.value
  );
  const dispatch = useAppDispatch();

  const handleOk = () => {
    toggleMenuClose();
  };

  const handleCancel = () => {
    dispatch(toggleMenuClose());
  };

  const triggerRegister = () => {
    dispatch(toggleMenuClose());
    dispatch(toggleRegisterModalOpen());
  };

  return (
    <Modal
      title={
        <h1 className="bebas text-[32px] font-normal text-center">Menu</h1>
      }
      open={menuStatus}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      footer={null}
      closable={false}
    >
      <div className="mainDiv flex flex-col gap-7 items-center justify-center">
        <Link href="/speakers" className="!text-[#333333]">
          Event Brochure
        </Link>
        <Link href="/speakers" className="!text-[#333333]">
          Speakers
        </Link>
        <Link href="/gallery" className="!text-[#333333]">
          Gallery
        </Link>
        <Link href="/exhibition-area" className="!text-[#333333]">
          Exhibition Area
        </Link>
        <CustomButton onClick={triggerRegister} className="w-full ">
          Register
        </CustomButton>
      </div>
    </Modal>
  );
};

export default MenuModal;
