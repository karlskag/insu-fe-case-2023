import { Button, Card, ParagraphCaption } from '@insurely/ui';

import { useFormatMessage } from 'hooks/useFormatMessage';

import styles from './sessionInfo.module.css';

interface SessionInfoProps {
  sessionId: string;
  sessionLink: string;
}

export const SessionInfo = ({ sessionId, sessionLink }: SessionInfoProps) => {
  const formatMessage = useFormatMessage();

  return (
    <Card className={styles.sessionInfoCard}>
      <div className={styles.alignItems}>
        <ParagraphCaption className={styles.link}>
          <span className={styles.linkLabel}>{formatMessage('Session id: ')}: </span>
          <span className="ph-no-capture">{sessionId}</span>
        </ParagraphCaption>
        <Button
          style={{ marginTop: '-4px' }}
          variant="primary"
          size="small"
          onClick={() => (sessionId ? navigator.clipboard.writeText(sessionId) : null)}
        >
          {formatMessage('Copy')}
        </Button>
      </div>
      <div className={styles.alignItems}>
        <ParagraphCaption className={styles.link}>
          <span className={styles.linkLabel}>{formatMessage('Session link: ')}: </span>
          <span className="ph-no-capture">{sessionLink}</span>
        </ParagraphCaption>
        <Button
          variant="primary"
          size="small"
          onClick={() => navigator.clipboard.writeText(sessionLink)}
        >
          {formatMessage('Copy')}
        </Button>
      </div>
    </Card>
  );
};
