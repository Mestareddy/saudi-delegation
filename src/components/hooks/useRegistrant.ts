import { apiRequester, apiRequestorArgs, TAxiosResponseData } from "@/services";
import { RegistrantEventType, StatusType } from "@/types/attendee";
import useSWRMutation from "swr/mutation";

type TUseRegistrant = {
  eventType?: RegistrantEventType;
  action?: StatusType;
};

const useRegistrant = ({
  eventType = "attendee",
  action = "approve",
}: TUseRegistrant) => {
  const getUrl = (type: RegistrantEventType, action: StatusType) => {
    switch (type) {
      case "attendee":
        return `/event/${action}`;
      case "booth":
        return `/event/booth`;
      case "speaker":
        return `/event/speaker`;
      default:
        return `/event/${action}`;
    }
  };

  const registrantSWR = useSWRMutation<
    TAxiosResponseData<any[]>,
    string,
    string,
    apiRequestorArgs
  >(getUrl(eventType, action), apiRequester);

  return {
    registrantSWR,
  };
};

export default useRegistrant;
