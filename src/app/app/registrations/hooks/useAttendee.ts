import { apiFetcher } from "@/services";
import { useEffect, useState } from "react";
import useSWR from "swr";

type TAttendeeStatus = "register" | "reject" | "approve";

const useAttendee = () => {
  const [attendeeStatus, setAttendeeStatus] =
    useState<TAttendeeStatus>("register");
  const attendeeSWR = useSWR<{
    data: any[];
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
