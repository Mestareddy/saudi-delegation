import { EventAttendee, RegistrantEventType } from "@/types/attendee";

export type Country = {
  name: string;
  id: string;
  code: string;
};

export type TCheckboxes = {
  request_as_speaker: boolean;
  request_booth: boolean;
  accept_terms: boolean;
};

export type TRegisterform = {
  first_name: string;
  company_size: number;
  industry: string;
  company_name: string;
  last_name: string;
  job_title: string;
  business_email: string;
  business_phone: string;
  nationality: number;
  request_help: string;
  bio:string
  speaker_topic:string
  speaker_profile_image?:string
};

export type RegistrantMainInfo = {
  registrantId?: string | number;
  eventType: RegistrantEventType;
};

export interface RegistrantMoreInfo extends EventAttendee {}

export type HeadOneProps = {
  text?: string;
};
