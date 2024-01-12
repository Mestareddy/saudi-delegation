"use client";
import { SWRConfig } from "swr";
import React, { lazy, Suspense } from "react";
import { SpinLoader } from "@/components/icons";

const AppLayout = lazy(() => import("../../components/private/layout"));

export default function Layout({ children }: { children: React.ReactNode }) {
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
      </Suspense>
    </SWRConfig>
  );
}