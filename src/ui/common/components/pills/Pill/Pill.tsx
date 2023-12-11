import React, { ReactNode } from 'react';

import styles from 'ui/common/components/pills/Pill/pill.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Pill = ({ className = '', children }: Props) => {
  return <div className={`${styles.pill} ${className}`}>{children}</div>;
};
