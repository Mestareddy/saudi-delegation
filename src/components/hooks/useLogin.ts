import { apiRequester, apiRequestorArgs, TAxiosResponseData } from "@/services";
import { User } from "@/types/auth";
import { clearLocalStorage, getLocalStorageItem, USER_DETAILS } from "@/util";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";

const useLogin = () => {
  const [user, setUser] = useState<null | User>(null);
  const router = useRouter();
  const loginSWR = useSWRMutation<
    TAxiosResponseData<any[]>,
    string,
    string,
    apiRequestorArgs
  >(`/auth/login`, apiRequester);

  useEffect(() => {
    const user = getLocalStorageItem<User>(USER_DETAILS);
    setUser(user);
  }, []);

  const logout = () => {
    clearLocalStorage();
    router.push("/auth/login");
  };

  return {
    user,
    logout,
    loginSWR,
  };
};

export default useLogin;
