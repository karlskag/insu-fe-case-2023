import { ReactNode, useMemo, useState } from 'react';

import { Language } from 'translations/types';

import AppContext from './AppContext';

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const appContextValue = useMemo(() => ({ language, setLanguage }), [language]);

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};
