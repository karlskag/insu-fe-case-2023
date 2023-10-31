import { Color, CompanyLogo, ParagraphPreamble } from '@insurely/ui';
import { Link } from 'react-router-dom';

import styles from './header.module.css';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <Link className={styles.logo} to="/">
      <CompanyLogo company="insurely" className={styles.svg} width="100px" />
      <ParagraphPreamble color="white" style={{ color: Color.green }}>
        Sales Support Tool
      </ParagraphPreamble>
    </Link>
  </header>
);
