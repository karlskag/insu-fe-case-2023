export interface Resolution {
  label: string;
  value: string;
}

export type RangeValue =
  | 'last week'
  | 'last month'
  | 'last quarter'
  | 'last six months'
  | 'this year'
  | 'all time';
