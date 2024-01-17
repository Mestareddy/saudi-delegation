export interface TAttendee {
  id: number;
  first_name: string;
  last_name: string;
  business_email: string;
  business_phone: string;
  industry: string;
  company_name: string;
  company_size: string;
  job_title: string;
  nationality: number;
  request_as_speaker: boolean;
  request_booth: boolean;
  accept_terms: boolean;
  status: string;
  request_help: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}

export type TAttendeeStatus = "register" | "reject" | "approve";
