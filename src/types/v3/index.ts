import { Language } from 'translations/types';

export interface SstParameter {
  clientId: string;
  id: number;
  insuranceCompany: string;
  insuranceName: string;
  insuranceSubType: string;
  insuranceType: string;
}

export enum Market {
  DK = 'DK',
  EE = 'EE',
  NO = 'NO',
  SE = 'SE',
  UK = 'UK',
  FR = 'FR',
}

export interface ConfigItem {
  clientId: string;
  baseUrl: string;
  logotype: string;
  language: Language;
}

export interface Config {
  advisoryParameters: SstParameter[];
  cancellationEnabled: boolean;
  cancellationServiceEnabled: boolean;
  currency: string;
  retention: number;
  market: Market;
  smsServiceEnabled: boolean;
  insuranceConfig?: ConfigItem;
  newInsuranceNumberMandatory: boolean;
}

export interface User {
  clientId: string;
  creationDate: string;
  customerId: string;
  email: string;
  enabled: boolean;
  permissions: string[];
}

export interface UserAttributes {
  qrRequirementConfirmation: boolean;
}

export interface CollectionStartedResponse {
  collectionId: string;
  creationDate: string;
  insuranceCompany: string;
  sessionId: string;
  status: string;
  numberOfInsurances: number;
  numberOfFilteredInsurances: number;
}

export interface SstCollectionResponse {
  clientId: string;
  clientName: string;
  collectionId: string;
  creationDate: string;
  incomplete: boolean;
  insuranceCompany: string;
  modifiedDate: string;
  numberOfFilteredInsurances: number;
  numberOfInsurances: number;
  personalNumber: string;
  sessionId?: string;
  state?: string;
  status: string;
  viewed?: string;
}

export interface CollectionIdInfo {
  id: string;
  numberOfInsurances: number;
  numberOfFilteredInsurances: number;
}

export interface CollectionsTableData extends SstCollectionResponse {
  insuranceCompanyList: string[];
  collectionIdInfoList: CollectionIdInfo[];
  groupState: string;
  groupViewed: boolean;
}

export interface SstClientResponse {
  clientId: string;
  clientName: string;
  productType: string;
}

export interface Session {
  advisoryUserUuid: string;
  collectionStartedResponses: CollectionStartedResponse[];
  creationDate: string;
  freeText: string;
  numberOfInsurances: number;
  numberOfFilteredInsurances: number;
  numberOfPensions: number;
  sessionId: string;
  type: string;
}

export enum LoginMethod {
  SWEDISH_MOBILE_BANKID_ANY_DEVICE = 'SWEDISH_MOBILE_BANKID_ANY_DEVICE',
  SWEDISH_MOBILE_BANKID_ANY_DEVICE_TEST = 'SWEDISH_MOBILE_BANKID_ANY_DEVICE_TEST',
  SWEDISH_MOBILE_BANKID_OTHER_DEVICE = 'SWEDISH_MOBILE_BANKID_OTHER_DEVICE',
  SWEDISH_MOBILE_BANKID_OTHER_DEVICE_MOCK = 'SWEDISH_MOBILE_BANKID_OTHER_DEVICE_MOCK',
  SWEDISH_MOBILE_BANKID_SAME_DEVICE_CLIENT_SIDE_AUTHENTICATION = 'SWEDISH_MOBILE_BANKID_SAME_DEVICE_CLIENT_SIDE_AUTHENTICATION',
  SWEDISH_MOBILE_BANKID_SAME_DEVICE = 'SWEDISH_MOBILE_BANKID_SAME_DEVICE',
  SWEDISH_SECURITY_TOKEN = 'SWEDISH_SECURITY_TOKEN',
  ESTONIAN_SMART_ID = 'ESTONIAN_SMART_ID',
  ESTONIAN_SMART_ID_USERNAME = 'ESTONIAN_SMART_ID_USERNAME',
  ESTONIAN_MOBIL_ID = 'ESTONIAN_MOBIIL_ID',
  DANISH_NEMID = 'DANISH_NEMID',
  DANISH_MITID = 'DANISH_MITID',
  UK_DOB_USERNAME_PASSWORD = 'UK_DOB_USERNAME_PASSWORD',
  UK_USERNAME_POSTCODE = 'UK_USERNAME_POSTCODE',
  UK_LASTNAME_MEMBERSHIP_NUMBER = 'UK_LASTNAME_MEMBERSHIP_NUMBER',
  USERNAME_AND_PASSWORD = 'USERNAME_AND_PASSWORD',
}

export interface Company {
  functional: boolean;
  insuranceCompany: string;
  insuranceCompanyDisplayName: string;
  loginMethods: LoginMethod[];
  status: string;
}

export enum CollectionState {
  NOT_SET = 'NOT_SET',
  CONTACTED = 'CONTACTED',
}
