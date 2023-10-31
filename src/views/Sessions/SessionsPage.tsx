import { HeadlineSix, HeadlineThree } from '@insurely/ui';
import React, { useContext, useEffect, useState } from 'react';

import { Navigate, useNavigationType, useSearchParams } from 'react-router-dom';

import { Page } from 'components/Page/Page';
import UserContext from 'contexts/user/UserContext';
import { FormatMessage, useFormatMessage } from 'hooks/useFormatMessage';
import utils from 'services/utils';
import { formatLocalDate } from 'translations/utils';
import { Session } from 'types/v3';

import { SessionCard } from './SessionCard/SessionCard';
import styles from './sessions.module.css';

function groupSessionsByDate(sessions: Session[]) {
  return sessions.reduce((r, a) => {
    // eslint-disable-next-line no-param-reassign
    r[utils.datetimeToDate(a.creationDate)] = r[utils.datetimeToDate(a.creationDate)] || [];
    r[utils.datetimeToDate(a.creationDate)].push(a);
    return r;
  }, Object.create(null));
}

function prettyDate(date: string, formatMessage: FormatMessage) {
  const d = new Date(date);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(new Date().getDate() - 1);
  if (d.toDateString() === today.toDateString()) {
    return formatMessage('Today');
  }
  if (d.toDateString() === yesterday.toDateString()) {
    return formatMessage('Yesterday');
  }
  return formatLocalDate(date);
}

export const SessionsPage: React.FC = () => {
  const formatMessage = useFormatMessage();
  const [redirectUrl] = useState<string | undefined>();
  const { sessions } = useContext(UserContext);

  const navigationType = useNavigationType();
  const [searchParams] = useSearchParams();

  const sessionsByDate: Session[][] = groupSessionsByDate(sessions);

  useEffect(() => {
    if (navigationType === 'PUSH' && searchParams) window.scrollTo(0, 0);
  }, [navigationType, searchParams]);

  if (redirectUrl) {
    return <Navigate to={redirectUrl} />;
  }

  return (
    <Page title={formatMessage('Sessions')}>
      <div className={styles.container}>
        <HeadlineThree margin="top bottom-large">{formatMessage('Sessions')}</HeadlineThree>
        {Object.entries(sessionsByDate)
          .reverse()
          .map(([date, dateSessions]) => (
            <div key={date} className={styles.day}>
              <HeadlineSix margin="top bottom">
                <strong>{prettyDate(date, formatMessage)}</strong>
              </HeadlineSix>
              <div className={styles.sessions}>
                {dateSessions.reverse().map((session: Session) => (
                  <SessionCard key={session.sessionId} session={session} type="insurance" />
                ))}
              </div>
            </div>
          ))}
      </div>
    </Page>
  );
};
