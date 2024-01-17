import { apiRequester, apiRequestorArgs, TAxiosResponseData } from "@/services";
import useSWRMutation from "swr/mutation";

const useLogin = () => {
  const loginSWR = useSWRMutation<
    TAxiosResponseData<any[]>,
    string,
    string,
    apiRequestorArgs
  >(`/auth/login`, apiRequester);

  return {
    loginSWR,
  };
};

export default useLogin;
