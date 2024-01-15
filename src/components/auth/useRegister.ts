import {
  apiFetcher,
  apiRequester,
  apiRequestorArgs,
  TAxiosResponseData,
} from "@/services";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Country } from "./types";


const useRegister = () => {
  const countrySWR = useSWR<{
    data: Country[];
  }>("/countries", apiFetcher, {
    revalidateOnFocus: false,
  });

  const registerEventSWR = useSWRMutation<
    TAxiosResponseData<any[]>,
    string,
    string,
    apiRequestorArgs
  >(`/event`, apiRequester);

  return {
    countrySWR,
    registerEventSWR,
  };
};

export default useRegister;
