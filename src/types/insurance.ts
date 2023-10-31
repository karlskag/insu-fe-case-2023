import { AddOn } from './v3/Addon';
import { Deductible } from './v3/Deductible';
import { Insurance } from './v3/Insurance';

export interface Parameter {
  parameterDescription: string;
  parameterDisplayName: string;
  parameterGroup: string;
  parameterGroupOrder: number;
  parameterName: string;
  value: string;
}

export interface InsuranceResponse {
  addons: AddOn[];
  collectionId?: string;
  collectionDate?: string;
  deductibles: Deductible[];
  displayType: string;
  insurance: Insurance;
  parameters: Parameter[];
  termsUrl?: string;
}
