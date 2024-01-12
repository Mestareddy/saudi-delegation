
/* eslint-disable */
export enum UserPreDefinedRole {
  SUPER_AMIN = "Super Admin",
}

export type UserRoles =
  | UserPreDefinedRole.SUPER_AMIN


  export interface User {
    access_token: string;
    "role.name":string;
  }