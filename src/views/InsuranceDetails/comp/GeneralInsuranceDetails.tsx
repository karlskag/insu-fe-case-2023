import styles from "../insuranceDetails.module.css";
import {InsuranceDetailsTable} from "./InsuranceDetailsTable";
import {formatCurrency} from "../../../translations/utils";
import React, {FC, useContext} from "react";
import {Insurance} from "../../../types/v3/Insurance";
import {useFormatMessage} from "../../../hooks/useFormatMessage";
import UserContext from "../../../contexts/user/UserContext";

interface InsuranceDetailsTablesProps {
  insurance: Insurance
}

export const GeneralInsuranceDetails: FC<InsuranceDetailsTablesProps> = ({ insurance }) => {
  const formatMessage = useFormatMessage();
  const { config } = useContext(UserContext);

  const {
    premiumAmountYearRounded,
      renewalDate,
      insuranceNumber,
      insuranceCompany,
      insuranceObjectStreetAddress,
      insuranceObjectPostalCode,
      insuredMovablesAmount,
      livingArea,
      numberOfResidents,
      insuranceHolderName,
  } = insurance

  return <section className={styles.insuranceDetails}>
    <div className={styles.detailsTableSection}>
      <InsuranceDetailsTable
        rows={[
          {
            label: formatMessage('Monthly premium'),
            value: premiumAmountYearRounded
              ? formatCurrency(config, Math.ceil(premiumAmountYearRounded / 12))
              : formatMessage('UNKNOWN_PREMIUM_FREQUENCY'),
          },
          {
            label: formatMessage('Annual premium'),
            value: premiumAmountYearRounded && formatCurrency(config, premiumAmountYearRounded),
          },
          {
            label: formatMessage('Renewal date'),
            value: renewalDate,
          },
        ]}
      />
    </div>
    <div className={styles.detailsTableSection}>
      <InsuranceDetailsTable
        heading={formatMessage('Insurance')}
        rows={[
          {
            label: formatMessage('Insurance number'),
            value: insuranceNumber,
          },
          {
            label: formatMessage('Insurance company'),
            value: insuranceCompany,
          },
          {
            label: formatMessage('Insurance object address'),
            value: insuranceObjectStreetAddress,
          },
          {
            label: formatMessage('Insurance object postal code'),
            value: insuranceObjectPostalCode,
          },
          {
            label: formatMessage('Insurance amount personal property'),
            value: insuredMovablesAmount && formatCurrency(config, insuredMovablesAmount),
          },
          {
            label: formatMessage('Living area'),
            value: livingArea,
          },
          {
            label: formatMessage('Number of residents'),
            value: numberOfResidents,
          },
        ]}
      />
    </div>
    <div className={styles.detailsTableSection}>
      <InsuranceDetailsTable
        heading={formatMessage('Insurance holder')}
        rows={[
          {
            label: formatMessage('Name'),
            value: insuranceHolderName,
          },
        ]}
      />
    </div>
  </section>;
}