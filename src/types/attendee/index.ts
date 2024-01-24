export interface EventAttendee {
  id: number |string
  first_name: string
  last_name: string
  business_email: string
  business_phone: string
  industry: any
  company_name: string
  company_size: string
  job_title: string
  nationality: string
  request_as_speaker: boolean
  request_booth: boolean
  accept_terms: boolean
  status: string
  booth_status: any
  speaker_status: any
  booth_reject_reason: any
  speaker_reject_reason: any
  reject_reason: any
  request_help: string
  created_at: string
  updated_at: string
  deleted_at: any
}

export type RegistrantEventType = "speaker" | "booth" | "attendee";

export type StatusType = "reject" | "approve"

export type RegistrantAction = {
  action?:StatusType;
  registrantId?: string | number;
  event?: RegistrantEventType
};



