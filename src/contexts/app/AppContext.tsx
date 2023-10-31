import { createContext } from 'react';

import { Language } from 'translations/types';

interface AppContextInterface {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

export default AppContext;
