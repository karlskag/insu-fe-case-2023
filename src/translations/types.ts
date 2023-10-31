import { messages } from './sv';

export enum Language {
  SV = 'sv',
  EN = 'en',
  NO = 'no',
  DK = 'dk',
  FR = 'fr',
}

export const LanguageProp = {
  [Language.SV]: {
    name: 'Svenska',
    file: import(`./sv`),
  },
  [Language.EN]: {
    name: 'English',
    file: import(`./en`),
  },
  [Language.NO]: {
    name: 'Norsk',
    file: import(`./no`),
  },
  [Language.DK]: {
    name: 'Dansk',
    file: import(`./dk`),
  },
  [Language.FR]: {
    name: 'Français',
    file: import(`./fr`),
  },
};

export type MessageKeys = keyof typeof messages;
export type Messages = typeof messages;
