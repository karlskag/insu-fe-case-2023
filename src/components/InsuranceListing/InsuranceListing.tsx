import { HeadlineFive, ParagraphCaption, ParagraphPreamble } from '@insurely/ui';
import { useContext } from 'react';

import { InsuranceCard } from 'components/InsuranceCard/InsuranceCard';
import UserContext from 'contexts/user/UserContext';
import { useFormatMessage } from 'hooks/useFormatMessage';
import { formatCurrency } from 'translations/utils';
import { InsuranceResponse } from 'types/insurance';

import { groupByDate } from 'utils/insurance';

import styles from './insuranceListing.module.css';

interface InsuranceListingProps {
  insurances: InsuranceResponse[];
}

export const InsuranceListing = ({ insurances }: InsuranceListingProps) => {
  const formatMessage = useFormatMessage();
  const { config } = useContext(UserContext);

  const home = insurances.filter((ins) => /house/.test(ins.insurance.insuranceType));
  const car = insurances.filter((ins) => /vehicle/.test(ins.insurance.insuranceType));
  const person = insurances.filter((ins) => /person/.test(ins.insurance.insuranceType));
  const animal = insurances.filter((ins) => /animal/.test(ins.insurance.insuranceType));

  const other = insurances.filter(
    (ins) => [...home, ...car, ...person, ...animal].indexOf(ins) === -1,
  );

  const lists = [];

  if (home.length) lists.push({ title: formatMessage('Home insurances'), items: home });
  if (car.length) lists.push({ title: formatMessage('Vehicle insurances'), items: car });
  if (person.length)
    lists.push({
      title: formatMessage('Person insurances'),
      items: person,
    });
  if (animal.length)
    lists.push({
      title: formatMessage('Animal insurances'),
      items: animal,
    });
  if (other.length) lists.push({ title: formatMessage('Other insurances'), items: other });

  function printInsurancesForEachCollectionDate(items: InsuranceResponse[]) {
    const groupedItems = groupByDate(items);

    return Object.keys(groupedItems)
      .reverse()
      .map((date) => (
        <div className={styles.section} key={date}>
          <ParagraphCaption margin="bottom">
            {formatMessage('Collected')} {date?.split('T')[0]} {formatMessage('at')}{' '}
            {new Date(`${date}Z`).toLocaleTimeString().substring(-1, 5)}
          </ParagraphCaption>
          <ul className={styles.list}>
            {groupedItems[date].map((ins: InsuranceResponse) => (
              <InsuranceCard
                key={ins.insurance.externalId}
                insurance={ins}
                className={styles.item}
              />
            ))}
          </ul>
        </div>
      ));
  }

  return (
    <>
      {lists.map((list) => (
        <div key={list.title} className={styles.wrapper}>
          <HeadlineFive>{list.title}</HeadlineFive>
          <ParagraphPreamble className={styles.total}>
            {formatMessage('Total:')}
            {formatMessage('amount/month', {
              amount: formatCurrency(
                config,
                Math.ceil(
                  list.items.reduce(
                    (acc, ins) => acc + (ins.insurance.premiumAmountYearRounded || 0),
                    0,
                  ) / 12,
                ),
              ),
            })}
          </ParagraphPreamble>

          {printInsurancesForEachCollectionDate(list.items)}
        </div>
      ))}
    </>
  );
};
