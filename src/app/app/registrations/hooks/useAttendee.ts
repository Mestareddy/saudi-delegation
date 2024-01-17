/* eslint-disable react-hooks/exhaustive-deps */
import { apiFetcher } from "@/services";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { TAttendee, TAttendeeStatus } from "../types";

const useAttendee = () => {
  const [attendeeStatus, setAttendeeStatus] =
    useState<TAttendeeStatus>("register");
  const attendeeSWR = useSWR<{
    data: TAttendee[];
  }>(`/event?status=${attendeeStatus}`, apiFetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (!attendeeSWR.isLoading) {
      attendeeSWR.mutate();
    }
  }, [attendeeStatus]);

  const changeAttendeeStatus = (type: TAttendeeStatus) => {
    setAttendeeStatus(type);
  };

  return {
    attendeeSWR,
    changeAttendeeStatus,
  };
};

export default useAttendee;
