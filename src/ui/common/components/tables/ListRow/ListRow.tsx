import React from 'react';

import styles from 'ui/common/components/tables/ListRow/listRow.module.scss';

type Props = {
  key?: string;
  className?: string;
  children: React.ReactNode;
};

export const ListRow = ({ children, key, className = '' }: Props) => {
  return (
    <div key={key} className={`${styles.listRow} ${className}`}>
      {children}
    </div>
  );
};
