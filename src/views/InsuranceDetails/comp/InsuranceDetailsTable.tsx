import React, { FC } from 'react';
import styles from '../insuranceDetails.module.css';
import { HeadlineFive, HeadlineSeven, ParagraphBody } from '@insurely/ui';

interface DetailsRow {
  label: string;
  value: string | number | undefined;
}

interface InsuranceDetailsTableProps {
  heading?: string;
  rows: DetailsRow[];
}

export const InsuranceDetailsTable: FC<InsuranceDetailsTableProps> = ({ heading, rows }) => {
  return (
    <table className={styles.summaryTable}>
      {!!heading && (
        <thead>
          <tr>
            <th className={styles.tableHead} colSpan={2}>
              <HeadlineFive margin="bottom">{heading}</HeadlineFive>
            </th>
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(({ label, value }, index) => {
          // This hides rows with falsy values, should be changed if we want to show rows with value 0
          if (!value) return;

          return (
            <tr key={index} className={styles.tableRow}>
              <td>
                <ParagraphBody margin="top bottom">{label}</ParagraphBody>
              </td>
              <td className={styles.tableValue}>
                <HeadlineSeven>{value}</HeadlineSeven>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
