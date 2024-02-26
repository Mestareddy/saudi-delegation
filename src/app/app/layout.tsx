"use client";
import { SWRConfig } from "swr";
import React, { lazy, Suspense, useLayoutEffect } from "react";
import { SpinLoader } from "@/components/icons";
import ApproveModal from "@/components/attendee/ApproveModal";
import DeclineModal from "@/components/attendee/DeclineModal";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import DeclineSuccessModal from "@/components/attendee/DeclineSuccessModal";
import useSession from "@/hooks/useSession";

const AppLayout = lazy(() => import("../../components/private/layout"));

export default function Layout({ children }: { children: React.ReactNode }) {
  const declineModalStatus = useAppSelector(
    (state: RootState) =>
      state.registrantDetailsModalSlice.registrantDeclineModal
  );

  const declineSuccessModalStatus = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.rejectSuccessModal
  );

  const { checkForAuthenticatedUser } = useSession();

  useLayoutEffect(() => {
    checkForAuthenticatedUser();
  }, [checkForAuthenticatedUser]);

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
        <ApproveModal />
        <DeclineModal declineModalStatus={declineModalStatus} />
        <DeclineSuccessModal
          declineSuccessModalStatus={declineSuccessModalStatus}
        />
      </Suspense>
    </SWRConfig>
  );
}
