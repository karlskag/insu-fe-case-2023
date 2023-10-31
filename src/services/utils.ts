import { Language } from 'translations/types';

import { Config } from 'types/v3';

function datetimeToDate(d: string) {
  return new Date(d).toISOString().slice(0, 10);
}

function addThousandSeparator(value: number | string | undefined) {
  return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : '';
}

function getLocalTime(time: string | number | Date) {
  const date = new Date(time);

  if (!date.getTime()) {
    throw new Error(`${time} is not a valid date string`);
  }

  return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
}

function getConfigItem(config: Config) {
  if (config.insuranceConfig) return config.insuranceConfig;
  return { clientId: '', baseUrl: '', logotype: '', language: Language.EN };
}

const Utils = {
  addThousandSeparator,
  getLocalTime,
  datetimeToDate,
  getConfigItem,
};

export default Utils;
