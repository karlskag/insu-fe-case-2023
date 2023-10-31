import { InsuranceResponse } from 'types/insurance';
import { Insurance } from 'types/v3/Insurance';

export const wash = (string: string) =>
  string == null ? '' : string.replace('försäkring', '').replace('Insurance', '');

export const calculateInsuranceTotals = (insurances: Insurance[]) => {
  const premiumAmountYearRounded = insurances.reduce((tot: number, ins: Insurance) => {
    if (!ins.employerPaid && ins.premiumAmountYearRounded) {
      return tot + ins.premiumAmountYearRounded;
    }
    return tot;
  }, 0);

  return { premiumAmountYearRounded };
};

export const groupByDate = (items: InsuranceResponse[]) => {
  const groupedItems: Record<string, InsuranceResponse[]> = {};
  items.forEach((item) => {
    const { collectionDate } = item;
    if (!collectionDate) return;

    if (!groupedItems[collectionDate]) {
      groupedItems[collectionDate] = [];
    }

    groupedItems[collectionDate].push(item);
    groupedItems[collectionDate].sort((a: InsuranceResponse, b: InsuranceResponse) =>
      a.insurance.startDate?.localeCompare(b.insurance.startDate || ''),
    );
  });
  return groupedItems;
};
