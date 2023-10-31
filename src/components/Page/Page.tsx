import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Header } from '../Header/Header';

import styles from './page.module.css';
import { PageHeader } from './PageHeader';

interface PageProps {
  title?: string;
  className?: string;
  scrollToTop?: boolean;
  goback?: boolean;
  children: React.ReactNode;
}

export const Page = ({ title, className, scrollToTop, goback, children }: PageProps) => {
  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [scrollToTop]);

  return (
    <>
      <Header />
      <div className={classNames(styles.page, className)}>
        <HelmetProvider>
          <Helmet>
            <title itemProp="name" lang="en">{`${title} | insurely`}</title>
          </Helmet>
        </HelmetProvider>
        {goback && <PageHeader goback />}
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
