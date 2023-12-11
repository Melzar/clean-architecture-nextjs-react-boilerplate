import React from 'react';

import styles from 'ui/common/components/layout/Widget/widget.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Widget = ({ children, className = '' }: Props) => (
  <div className={`${styles.widget} ${className}`}>{children}</div>
);
