import utils from 'services/utils';
import { Config } from 'types/v3';

import { Language, LanguageProp } from './types';

export const importMessages = (language: Language) => {
  switch (language) {
    case Language.NO:
      return LanguageProp[Language.NO].file;
    case Language.DK:
      return LanguageProp[Language.DK].file;
    case Language.EN:
      return LanguageProp[Language.EN].file;
    case Language.FR:
      return LanguageProp[Language.FR].file;
    case Language.SV:
    default:
      return LanguageProp[Language.SV].file;
  }
};

export const formatCurrency = (config: Config, amount: number) =>
  Intl.NumberFormat(utils.getConfigItem(config).language, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    ...(config.currency
      ? {
          style: 'currency',
          currency: config.currency,
        }
      : {}),
  }).format(amount);

export const formatLocalDate = (date: string) => new Date(date).toLocaleDateString('sv-SE');

export const formatLocalTime = (date: string) => new Date(date).toLocaleTimeString('sv-SE');
