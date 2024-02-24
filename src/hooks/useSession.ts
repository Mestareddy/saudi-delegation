import { User } from "@/types/auth";
import {
  USER_DETAILS,
  USER_SESSION,
  getLocalStorageItem,
  removeLocalStorageItem,
} from "@/util";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useSession = () => {
  const router = useRouter();

  const getUserSession = useCallback(() => {
    const authUser = getLocalStorageItem<User>(USER_DETAILS);
    return {
      //   authSession,
      authUser,
    };
  }, []);

  const logoutUser = useCallback(() => {
    // clearUserSession()
    removeLocalStorageItem(USER_DETAILS);
    removeLocalStorageItem(USER_SESSION);
    localStorage.clear();
    // window.location.href = "/auth/login";
    router.replace("/auth/login");
  }, []);

  const checkForAuthenticatedUser = useCallback(() => {
    const { authUser } = getUserSession();
    if (!authUser) {
      logoutUser();
    }
  }, [getUserSession, logoutUser]);

  return { getUserSession, logoutUser, checkForAuthenticatedUser };
};

export default useSession;
