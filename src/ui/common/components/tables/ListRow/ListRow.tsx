import React from 'react';

import styles from 'ui/common/components/tables/ListRow/listRow.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const ListRow = ({ children, className = '' }: Props) => {
  return <div className={`${styles.listRow} ${className}`}>{children}</div>;
};
