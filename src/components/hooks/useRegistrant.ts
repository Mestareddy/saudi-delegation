import { apiRequester, apiRequestorArgs, TAxiosResponseData } from "@/services";
import useSWRMutation from "swr/mutation";

const useRegistrant = () => {
  const registrantActionSWR = useSWRMutation<
    TAxiosResponseData<any[]>,
    string,
    string,
    apiRequestorArgs
  >(`/event`, apiRequester);

  return {
    registrantActionSWR,
  };
};

export default useRegistrant;
