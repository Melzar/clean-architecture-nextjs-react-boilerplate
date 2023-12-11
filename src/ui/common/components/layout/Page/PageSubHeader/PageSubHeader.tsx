import { ReactNode } from 'react';

import styles from 'ui/common/components/layout/Page/PageSubHeader/pageSubHeader.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const PageSubHeader = ({ children, className = '' }: Props) => (
  <div className={`${styles.pageSubHeader} ${className}`}>{children}</div>
);
