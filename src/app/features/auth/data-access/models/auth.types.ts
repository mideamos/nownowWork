export interface LoginInterface {
  email: string
  password: string
}
export interface OtpInterface {
  code: string
  email: string
}
export interface ResendOtpInterface {
  email: string
}

export enum OtpEnum {
  password = "password",
  verification = "verification",
}

export interface RegisterInterface {
  email: string
  first_name: string
  last_name: string
  phone: string
  company_name: string
  password: string
}

export interface StepStatusModel {
  "3": boolean
  "4": boolean
  "5": boolean
}
