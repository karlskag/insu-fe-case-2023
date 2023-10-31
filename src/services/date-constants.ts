import { FormatMessage } from 'hooks/useFormatMessage';

export const dateRangeSelections = (formatMessage: FormatMessage) => [
  {
    label: formatMessage('Last week'),
    value: 'last week',
  },
  {
    label: formatMessage('Last month'),
    value: 'last month',
  },
  {
    label: formatMessage('Last quarter'),
    value: 'last quarter',
  },
  {
    label: formatMessage('Last six months'),
    value: 'last six months',
  },
  {
    label: formatMessage('This year'),
    value: 'this year',
  },
  {
    label: formatMessage('Since the beginning'),
    value: 'all time',
  },
];

export const resolutionValues = (formatMessage: FormatMessage) => ({
  day: {
    label: formatMessage('Day'),
    value: 'DAY',
  },
  week: {
    label: formatMessage('Week'),
    value: 'WEEK',
  },
  month: {
    label: formatMessage('Month'),
    value: 'MONTH',
  },
});
