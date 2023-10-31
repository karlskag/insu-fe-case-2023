import { Label } from './Label';

export enum InsuranceLevel {
  UNDEFINED,
  BASE,
  PLUS,
}

export const PremiumFrequency = {
  '12': 'MONTHLY_PREMIUM_FREQUENCY',
  '4': 'QUARTERLY_PREMIUM_FREQUENCY',
  '2': 'BI_YEARLY_PREMIUM_FREQUENCY',
  '1': 'YEARLY_PREMIUM_FREQUENCY',
  '0': 'ONE_TIME_PAYMENT',
  '-1': 'MONTHLY_PREMIUM_FREQUENCY',
};

export enum PaymentMethod {
  UNDEFINED = 'UNDEFINED',
  AUTOGIRO = 'AUTOGIRO',
  PAPER_INVOICE = 'PAPER_INVOICE',
  ELECTRONIC_INVOICE = 'ELECTRONIC_INVOICE',
  GENERIC_INVOICE = 'GENERIC_INVOICE',
  ONE_TIME_PAYMENT = 'ONE_TIME_PAYMENT',
  EMPLOYER_PAID = 'EMPLOYER_PAID',
  CREDIT_CARD = 'CREDIT_CARD',
}

export type GeneralInsurance = {
  // Label is used to distinguish special cases for insurance validation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coming?: boolean;
  connectedAlarmDiscount?: boolean;
  discountAmount?: number;
  discountPercentage?: string;
  employerPaid?: boolean;
  employmentStatus?: string;
  externalId: string; // Optional since we are setting it after the fact
  insuranceCompany?: string; // Optional since we are setting it after the fact
  insuranceHolderCity?: string;
  insuranceHolderClaimsFreeYears?: string;
  insuranceHolderClaimsLastFiveYears?: string;
  insuranceHolderDateOfBirth?: string;
  insuranceHolderEmail?: string;
  insuranceHolderName?: string;
  insuranceHolderPhoneNumber?: string;
  insuranceHolderPostalCode?: string;
  insuranceHolderStreetAddress?: string;
  insuranceName: string;
  insuranceNumber?: string;
  insuranceObjectCity?: string;
  insuranceObjectPostalCode?: string;
  insuranceObjectStreetAddress?: string;
  insuranceSubType: 'condoInsurance';
  insuranceType: 'houseContentInsurance';
  insuredMovablesAmount?: number;
  label?: Label;
  listedProperty?: string;
  livingArea?: number;
  numberOfAdults?: number;
  numberOfBathRooms?: string;
  numberOfBedrooms?: string;
  numberOfChildren?: number;
  numberOfResidents?: number;
  occupation?: string;
  otherInsuranceHolder?: boolean;
  ownerStatus?: string;
  paymentMethod: PaymentMethod;
  personalPossessionsLimit?: string;
  premiumAmountYearRounded?: number;
  premiumFrequency: number;
  propertyBuiltYear?: string;
  renewalAmount?: string;
  renewalDate?: string;
  securityDoorGridDiscount?: boolean;
  startDate: string;
  typeOfProperty?: string;
};

export type Insurance = GeneralInsurance;
