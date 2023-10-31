import React, { useState, useEffect, FC } from 'react';

import { InsuranceResponse } from 'types/insurance';

import { wash } from 'utils/insurance';

import { insurances } from '../../data/insurances';
import { useParams } from 'react-router-dom';
import { InsuranceDetails } from './comp/InsuranceDetails';
import { Page } from '../../components/Page/Page';
import styles from './insuranceDetails.module.css';
import {
  Button,
  CompanyLogo,
  HeadlineThree,
  ParagraphTiny,
  IconDownload,
  HeadlineFive,
} from '@insurely/ui';
import { useFormatMessage } from '../../hooks/useFormatMessage';

export const InsuranceDetailsPage: FC = () => {
  const { externalId } = useParams() as { externalId: string };
  const [items] = useState<InsuranceResponse[]>(insurances);
  const [insuranceData, setInsuranceData] = useState<InsuranceResponse | undefined>();
  const formatMessage = useFormatMessage();

  useEffect(() => {
    const matchingInsurance = items.find(
      (ins) => ins.insurance.externalId.toString() === externalId,
    );
    setInsuranceData(matchingInsurance);
  }, [externalId, items]);

  if (!insuranceData?.collectionId) {
    return (
      <Page>
        <div className={styles.topContent}>
          <HeadlineFive>{formatMessage('No insurances found')}</HeadlineFive>
        </div>
      </Page>
    );
  }

  const {
    displayType,
    insurance: { insuranceName, insuranceCompany },
  } = insuranceData;

  return (
    <Page title={`${wash(displayType)}, ${insuranceName}`} goback>
      <div className={styles.topContent}>
        <CompanyLogo className={styles.logo} company={insuranceCompany} width="46px" />
        <div>
          <ParagraphTiny>{wash(displayType)}</ParagraphTiny>
          <HeadlineThree className="ph-no-capture">{insuranceName}</HeadlineThree>
        </div>
      </div>
      <Button
        variant="secondary"
        size="large"
        onClick={() => {}}
        icon={<IconDownload width={30} />}
      >
        {formatMessage('Download insurance data')}
      </Button>
      <InsuranceDetails insurance={insuranceData} />
    </Page>
  );
};
