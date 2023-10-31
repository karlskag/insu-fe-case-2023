import { Avatar, CardWithIcon, IconChevronRight } from '@insurely/ui';
import IntlMessageFormat from 'intl-messageformat';
import { useNavigate } from 'react-router-dom';

import { useFormatMessage } from 'hooks/useFormatMessage';
import { SESSIONS_PAGE_ROUTE } from 'services/routes';
import { Session } from 'types/v3';
import { upperCaseFirstLetter } from 'utils/formatters';

interface SessionCardProps {
  type: 'pension' | 'insurance';
  session: Session;
}

export const SessionCard: React.FC<SessionCardProps> = ({ type, session }) => {
  const formatMessage = useFormatMessage();
  const navigate = useNavigate();

  const numberOfData =
    type === 'pension' ? session.numberOfPensions : session.numberOfFilteredInsurances;

  const getIcon = (number: number) =>
    number > 0 ? <Avatar color="green" text={number.toString()} /> : number.toString();

  const getNumberOfDataCopy = (data: number) =>
    upperCaseFirstLetter(
      new IntlMessageFormat(
        `{data, plural,
      =0 {${type === 'pension' ? formatMessage('No pensions') : formatMessage('No insurances')}}
      =1 {# ${type === 'pension' ? formatMessage('Pension') : formatMessage('Insurance')}}
      other {# ${type === 'pension' ? formatMessage('Pensions') : formatMessage('Insurances')}}
    }`,
      )
        .format({ data })
        .toString(),
    );

  return (
    <CardWithIcon
      style={{ border: '1px solid var(--grey03)' }}
      icon={getIcon(numberOfData)}
      // eslint-disable-next-line
      // @ts-ignore
      title={<span className="ph-no-capture">{session.freeText}</span>}
      subtitle={getNumberOfDataCopy(numberOfData)}
      onClick={() => navigate(`/${SESSIONS_PAGE_ROUTE}/${session.sessionId}`)}
    >
      <IconChevronRight width="22px" />
    </CardWithIcon>
  );
};
