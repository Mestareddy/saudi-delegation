import { apiRequester, apiRequestorArgs, TAxiosResponseData } from "@/services";
import useSWRMutation from "swr/mutation";

const useRegistrant = () => {
  const registrantApproveSWR = useSWRMutation<
    TAxiosResponseData<any[]>,
    string,
    string,
    apiRequestorArgs
  >(`/event/approve`, apiRequester);

  const registrantRejectSWR = useSWRMutation<
    TAxiosResponseData<any[]>,
    string,
    string,
    apiRequestorArgs
  >(`/event/reject`, apiRequester);

  return {
    registrantApproveSWR,
    registrantRejectSWR,
  };
};

export default useRegistrant;
