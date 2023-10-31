// eslint-disable-next-line import/no-extraneous-dependencies
import { renderHook } from '@testing-library/react';

import { messages } from '../translations/sv';

import { useFormatMessage } from './useFormatMessage';

describe('useFormatMessage', () => {
  beforeAll(() => {
    vi.mock('react-intl', async () => {
      const reactIntl = await vi.importActual<typeof import('react-intl')>('react-intl');
      const intl = reactIntl.createIntl({
        locale: 'sv',
        messages,
      });

      return {
        ...reactIntl,
        useIntl: () => intl,
      };
    });
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  test('should return localised message when string is passed as argument', () => {
    const { result } = renderHook(() => useFormatMessage());

    expect(result.current('Log out')).toBe('Logga ut');
  });

  test('should return localised message when object is passed as argument', () => {
    const { result } = renderHook(() => useFormatMessage());

    expect(result.current({ id: 'Log out' })).toBe('Logga ut');
  });

  test('should return localised message when object with replace values is passed as argument', () => {
    const { result } = renderHook(() => useFormatMessage());

    expect(
      result.current('amount/month', {
        amount: '200 kr',
      }),
    ).toBe('200 kr/månad');
  });
});
