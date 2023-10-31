import { IconNoInsurance, CardWithIcon } from '@insurely/ui';

import { useFormatMessage } from 'hooks/useFormatMessage';

const EmptyState = () => {
  const formatMessage = useFormatMessage();
  return (
    <CardWithIcon
      flat
      icon={
        <IconNoInsurance
          aria-hidden
          style={{ backgroundColor: '#fff', borderRadius: '50%', padding: 4 }}
          width="48px"
        />
      }
      style={{
        backgroundColor: 'var(--beige01)',
        borderColor: 'transparent',
        maxWidth: 560,
        marginTop: 80,
      }}
      subtitle={formatMessage('This user has not collected any insurances yet.')}
      title={formatMessage('Nothing to see here')}
    />
  );
};

export default EmptyState;
