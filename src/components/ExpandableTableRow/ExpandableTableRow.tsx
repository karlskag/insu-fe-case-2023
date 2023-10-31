import { IconButton, IconChevronDown, RowTwo } from '@insurely/ui';
import classNames from 'classnames';
import {CSSProperties, useCallback, useRef, useState} from 'react';

import styles from './expandableTableRow.module.css';

interface ExpandableTableRowProps<Field extends string> {
  row: RowTwo<Field | 'title' | 'content'>;
  tdStyle?: CSSProperties | undefined
}

export function ExpandableTableRow<Field extends string>({
  tdStyle,
  row: { values },
}: ExpandableTableRowProps<Field>) {
  const [open, setOpen] = useState(false);
  const elementRef = useRef<HTMLTableRowElement>(null);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <tr
        ref={elementRef}
        onClick={handleClick}
        className={classNames(styles.mainRow, {
          [styles.open]: open,
        })}
      >
        <td>
          <div className={styles.title} style={{ ...tdStyle }}>
            {values.title}
            <IconButton
              className={classNames(styles.chevron, {
                [styles.open]: open,
              })}
              icon={<IconChevronDown width="26px" />}
            />
          </div>
        </td>
      </tr>
      <tr className={styles.contentRow}>
        <td>
          <div
            className={classNames(styles.content, {
              [styles.open]: open,
            })}
          >
            {values.content}
          </div>
        </td>
      </tr>
    </>
  );
}
