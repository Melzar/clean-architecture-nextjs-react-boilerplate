import React from 'react';

import styles from 'ui/common/components/layout/Container/container.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ children, className = '' }: Props) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);
