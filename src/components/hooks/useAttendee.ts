/* eslint-disable react-hooks/exhaustive-deps */
import { useDebounce, usePagination } from "@/components/hooks";
import { apiFetcher } from "@/services";
import { EventAttendee, TAttendeeStatus } from "@/types/attendee";
import { exportToExcel } from "@/util";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";

const useAttendee = (defaultStatus?: TAttendeeStatus, queryParmas?: string) => {
  const [attendeeStatus, setAttendeeStatus] =
    useState<TAttendeeStatus>("register");
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const {
    itemPerPage,
    currentPage,
    paginateHandler,
    totalPages,
    seTotalPageHandler,
  } = usePagination();

  const debouncedValue = useDebounce(searchQuery, 800);

  const attendeeSWR = useSWR<{
    data: EventAttendee[];
  }>(
    `/event?status=${attendeeStatus}&limit=${itemPerPage}&page=${currentPage}${
      debouncedValue ? debouncedValue : ""
    }${queryParmas || ""}`,
    apiFetcher,
    {
      revalidateOnFocus: false,
      onSuccess: (data: any) => {
        if (data.results) {
          seTotalPageHandler(data.results);
        }
      },
    }
  );

  const speakersStatusSWR = useSWR<{
    data: EventAttendee[];
  }>(
    `/event?speaker_status=${attendeeStatus}&limit=${itemPerPage}&page=${currentPage}${
      debouncedValue ? debouncedValue : ""
    }${queryParmas || ""}`,
    apiFetcher,
    {
      revalidateOnFocus: false,
      onSuccess: (data: any) => {
        if (data.results) {
          seTotalPageHandler(data.results);
        }
      },
    }
  );

  const boothStatusSWR = useSWR<{
    data: EventAttendee[];
  }>(
    `/event?booth_status=${attendeeStatus}&limit=${itemPerPage}&page=${currentPage}${
      debouncedValue ? debouncedValue : ""
    }${queryParmas || ""}`,
    apiFetcher,
    {
      revalidateOnFocus: false,
      onSuccess: (data: any) => {
        if (data.results) {
          seTotalPageHandler(data.results);
        }
      },
    }
  );

  useEffect(() => {
    if (debouncedValue && currentPage > 1) {
      attendeeSWR.mutate();
    }
    if (defaultStatus) {
      setAttendeeStatus(defaultStatus);
    }
  }, [debouncedValue, defaultStatus, currentPage]);

  const paginate = (page: number) => {
    paginateHandler(page);
  };

  const changeAttendeeStatus = (type: TAttendeeStatus) => {
    setAttendeeStatus(type);
  };

  const getParams = (query: string) => {
    const queryParams = `&first_name=${query}&last_name=${query}&company_name=${query}`;
    return queryParams;
  };

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const queries = getParams(event.target.value);
      setSearchQuery(queries);
    } else {
      setSearchQuery(undefined);
    }
  };

  const handleExportToExcel = (data: any[], fileName: string) => {
    // FIXME: remove the "speaker_profile_image" field characters too big to be added in a excel sheet
    const formattedData = data.map((item) => ({
      ...item,
      speaker_profile_image: "",
    }));
    exportToExcel(formattedData, fileName);
  };

  return {
    paginate,
    attendeeSWR,
    speakersStatusSWR,
    boothStatusSWR,
    totalPages,
    currentPage,
    seTotalPageHandler,
    attendeeStatus,
    handleExportToExcel,
    handleSearchQuery,
    changeAttendeeStatus,
  };
};

export default useAttendee;
