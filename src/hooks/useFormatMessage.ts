import type { PrimitiveType } from 'intl-messageformat';
import { MessageDescriptor, useIntl } from 'react-intl';

import { MessageKeys } from 'translations/types';

export function useFormatMessage(): (
  id: MessageKeys | MessageDescriptor, // only accepts valid keys, not any string
  values?: Record<string, PrimitiveType>,
) => string {
  const intl = useIntl();
  return (id, values) => {
    if (typeof id === 'string') {
      return intl.formatMessage({ id }, values);
    }
    return intl.formatMessage(id, values);
  };
}

export type FormatMessage = ReturnType<typeof useFormatMessage>;
