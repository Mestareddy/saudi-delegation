
/* eslint-disable */
export enum UserPreDefinedRole {
  SUPER_AMIN = "Super Admin",
}

export type UserRoles =
  | UserPreDefinedRole.SUPER_AMIN


  export interface User {
    access_token: string
  refresh_token: string
  id: number
  first_name: string
  last_name: string
  email: string
  phone: any
  role: any
  active: boolean
  created_at: string
  updated_at: string
  reset_count: number
  }


