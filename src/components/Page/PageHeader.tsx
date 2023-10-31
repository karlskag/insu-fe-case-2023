import { IconArrowLeft, ParagraphCaption } from '@insurely/ui';

import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import { useFormatMessage } from 'hooks/useFormatMessage';

import { SESSIONS_PAGE_ROUTE } from 'services/routes';

import styles from './pageHeader.module.css';

interface PageHeaderProps {
  goback?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ goback }) => {
  const formatMessage = useFormatMessage();
  const { pathname } = useLocation();
  const { sessionId } = useParams();
  const navigate = useNavigate();
  if (goback) {
    return (
      <header className={styles.header}>
        <button
          type="button"
          className={styles.gobackButton}
          onClick={() =>
            pathname === `/sessions/${sessionId}`
              ? navigate(`/${SESSIONS_PAGE_ROUTE}`)
              : navigate(-1)
          }
        >
          <IconArrowLeft width="24px" color="var(--green)" strokeWidth={3} />
          <ParagraphCaption
            style={{ fontWeight: '600', textDecoration: 'underline', color: 'var(--green)' }}
          >
            {formatMessage('Go back')}
          </ParagraphCaption>
        </button>
      </header>
    );
  }
  return null;
};
