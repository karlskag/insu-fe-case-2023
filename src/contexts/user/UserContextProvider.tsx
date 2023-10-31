import { useState, ReactNode, useMemo } from 'react';

import UserContext from 'contexts/user/UserContext';
import { config as defaultConfig } from 'data/config';
import { Company, Config, Session, User as UserInterface, UserAttributes } from 'types/v3';

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [companies] = useState<Company[]>([]);
  const [user] = useState<UserInterface | undefined>(undefined);
  const [config] = useState<Config>(defaultConfig);
  const [sessions] = useState<Session[]>([]);
  const [userAttributes, setUserAttributes] = useState<UserAttributes>({
    qrRequirementConfirmation: true,
  });

  const userContextValue = useMemo(
    () => ({
      user,
      userAttributes,
      setUserAttributes,
      sessions,
      config,
      companies,
    }),
    [companies, config, userAttributes, sessions, user],
  );

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
