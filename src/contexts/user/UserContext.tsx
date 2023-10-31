import { createContext } from 'react';

import { config } from 'data/config';
import { sessions } from 'data/sessions';
import user from 'data/user.json';
import { Company, Config, Session, User as UserInterface, UserAttributes } from 'types/v3';

interface UserContextInterface {
  user?: UserInterface;
  userAttributes: UserAttributes;
  setUserAttributes?: (userAttributes: UserAttributes) => void;
  sessions: Session[];
  companies: Company[];
  config: Config;
}

export const initialUserContext: UserContextInterface = {
  user,
  userAttributes: { qrRequirementConfirmation: true },
  sessions,
  companies: [],
  config,
};

const UserContext = createContext<UserContextInterface>(initialUserContext);

export default UserContext;
