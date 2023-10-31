import { InsuranceResponse } from '../../../types/insurance';
import React, { FC } from 'react';
import styles from '../insuranceDetails.module.css';
import { GeneralInsuranceDetails } from './GeneralInsuranceDetails';
import {ParameterDetails} from "./ParameterDetails";

interface InsuranceDetailsProps {
  insurance: InsuranceResponse;
}

export const InsuranceDetails: FC<InsuranceDetailsProps> = ({ insurance }) => {
  const { termsUrl, parameters, insurance: generalInsurance } = insurance;

  return (
    <div className={styles.content}>
      <GeneralInsuranceDetails insurance={generalInsurance} />
      <ParameterDetails parameters={parameters} termsUrl={termsUrl} />
    </div>
  );
};
