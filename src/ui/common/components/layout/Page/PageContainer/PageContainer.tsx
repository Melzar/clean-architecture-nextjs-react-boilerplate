import React from 'react';

import styles from 'ui/common/components/layout/Page/PageContainer/pageContainer.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className = '' }: Props) => (
  <div className={`${styles.pageContainer} ${className}`}>{children}</div>
);
