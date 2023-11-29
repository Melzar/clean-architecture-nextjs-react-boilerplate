import React, { ReactNode } from 'react';

import styles from 'ui/common/components/pills/Pill/pill.module.scss';

type Props = {
  children: ReactNode;
};

export const Pill = ({ children }: Props) => {
  return <div className={styles.pill}>{children}</div>;
};
