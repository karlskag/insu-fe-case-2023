import { IconInsurance, Menu, MenuLink, HeadlineEight, IconLogOut, Color } from '@insurely/ui';

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import UserContext from 'contexts/user/UserContext';
import { useFormatMessage } from 'hooks/useFormatMessage';

import { SESSIONS_PAGE_ROUTE } from 'services/routes';
import utils from 'services/utils';

import styles from './sideNav.module.css';

interface RouteItem {
  route: string;
  label: string;
  icon: React.ReactElement;
}

const LinkItem = ({ link, onClick }: { link: RouteItem; onClick: () => void }) => (
  <NavLink key={link.route} end={false} to={link.route} onClick={onClick}>
    {({ isActive }) => (
      <MenuLink isActive={isActive}>
        {link.icon}
        {link.label}
      </MenuLink>
    )}
  </NavLink>
);

export const SideNav: React.FC = () => {
  const { config } = useContext(UserContext);
  const formatMessage = useFormatMessage();
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const routes: RouteItem[] = [
    {
      route: SESSIONS_PAGE_ROUTE,
      label: formatMessage('Sessions'),
      icon: <IconInsurance aria-hidden width="32px" color="var(--midnight)" />,
    },
  ];

  const getLogotype = () => (
    <div
      className={styles.logo}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: utils.getConfigItem(config).logotype }}
    />
  );

  return (
    <Menu
      desktopOnly
      hideMenuButton={width > 990}
      stickyMenuButton
      isOpen={width > 990 || menuOpen}
      onOpen={() => setMenuOpen(!menuOpen)}
      logo={getLogotype()}
    >
      {routes.map((link) => (
        <LinkItem key={link.route} link={link} onClick={() => setMenuOpen(false)} />
      ))}
      <div className={styles.bottomLinks}>
        {width < 565 && (
          <button type="button" className={styles.logoutButton}>
            <IconLogOut aria-hidden width="32px" color={Color.midnight} />
            <HeadlineEight>{formatMessage('Log out')}</HeadlineEight>
          </button>
        )}
      </div>
    </Menu>
  );
};
