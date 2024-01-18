"use client";
import { SWRConfig } from "swr";
import React, { lazy, Suspense } from "react";
import { SpinLoader } from "@/components/icons";
import ApproveModal from "@/components/attendee/ApproveModal";
import DeclineModal from "@/components/attendee/DeclineModal";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

const AppLayout = lazy(() => import("../../components/private/layout"));

export default function Layout({ children }: { children: React.ReactNode }) {
  const approvalModalStatus = useAppSelector(
    (state: RootState) =>
      state.registrantDetailsModalSlice.registrantApproveModal
  );
  const declienModalStatus = useAppSelector(
    (state: RootState) =>
      state.registrantDetailsModalSlice.registrantDeclineModal
  );
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Suspense
        fallback={
          <div className="bg-white flex items-center justify-center h-screen text-green-minst">
            <SpinLoader size="56" />
          </div>
        }
      >
        <AppLayout user={null}>{children}</AppLayout>
        <ApproveModal approvalModalStatus={approvalModalStatus} />
        <DeclineModal declienModalStatus={declienModalStatus} />
      </Suspense>
    </SWRConfig>
  );
}
