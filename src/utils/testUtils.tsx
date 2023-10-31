/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from 'contexts/user/UserContextProvider';

import { messages } from '../translations/sv';

export const customRender: (ui: ReactElement) => ReturnType<typeof render> = (ui: ReactElement) =>
  render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <UserContextProvider>
          <IntlProvider locale="sv" messages={messages}>
            {children}
          </IntlProvider>
        </UserContextProvider>
      </BrowserRouter>
    ),
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
