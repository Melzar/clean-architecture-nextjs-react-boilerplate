import React, { ReactNode } from 'react';

import styles from 'ui/common/components/pills/Pill/pill.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  testId?: string;
};

export const Pill = ({ className = '', children, testId }: Props) => {
  return (
    <div className={`${styles.pill} ${className}`} data-testid={testId}>
      {children}
    </div>
  );
};
