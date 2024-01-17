/* eslint-disable react-hooks/exhaustive-deps */
import { useDebounce, usePagination } from "@/components/hooks";
import { apiFetcher } from "@/services";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { TAttendee, TAttendeeStatus } from "../types";

const useAttendee = () => {
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
    data: TAttendee[];
  }>(
    `/event?status=${attendeeStatus}&limit=${itemPerPage}&page=${currentPage}${
      debouncedValue ? debouncedValue : ""
    }`,
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
    if (debouncedValue) {
      attendeeSWR.mutate();
    }
  }, [debouncedValue]);

  useEffect(() => {
      attendeeSWR.mutate();
  }, [attendeeStatus, currentPage]);

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
    }else{
      setSearchQuery(undefined)
    }
  };

  return {
    paginate,
    attendeeSWR,
    totalPages,
    currentPage,
    seTotalPageHandler,
    attendeeStatus,
    handleSearchQuery,
    changeAttendeeStatus,
  };
};

export default useAttendee;
