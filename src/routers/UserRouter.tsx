import { Loader } from '@insurely/ui';
import { useContext, useEffect, useState } from 'react';

import { IntlProvider } from 'react-intl';
import { Navigate, Route, Routes, useNavigationType, useSearchParams } from 'react-router-dom';

import { SideNav } from 'components/SideNav/SideNav';
import AppContext from 'contexts/app/AppContext';
import UserContext from 'contexts/user/UserContext';

import { SESSIONS_PAGE_ROUTE } from 'services/routes';
import utils from 'services/utils';

import { Messages } from 'translations/types';
import { importMessages } from 'translations/utils';
import { SessionPage } from 'views/Session/SessionPage';
import { SessionsPage } from 'views/Sessions/SessionsPage';
import { InsuranceDetailsPage } from '../views/InsuranceDetails/InsuranceDetailsPage';

const UserRouter = () => {
  const [messages, setMessages] = useState<Messages>();
  const { setLanguage, language } = useContext(AppContext);
  const { config } = useContext(UserContext);
  const navigationType = useNavigationType();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLanguage(utils.getConfigItem(config).language);
  }, [config, setLanguage]);

  useEffect(() => {
    importMessages(language).then(({ messages: mess }) => {
      setMessages(mess);
    });
  }, [language]);

  useEffect(() => {
    if (navigationType === 'PUSH' && searchParams) window.scrollTo(0, 0);
  }, [navigationType, searchParams]);

  if (!messages) {
    return <Loader.Content />;
  }

  return (
    <IntlProvider locale={language} messages={messages}>
      <SideNav />
      <Routes>
        <Route path={SESSIONS_PAGE_ROUTE} element={<SessionsPage />} />
        <Route path={`${SESSIONS_PAGE_ROUTE}/:sessionId`}>
          <Route index element={<SessionPage />} />
          <Route path=":externalId" element={<InsuranceDetailsPage />} />
        </Route>
        <Route path="/*" element={<Navigate to={SESSIONS_PAGE_ROUTE} />} />
      </Routes>
    </IntlProvider>
  );
};

export default UserRouter;
