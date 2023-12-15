import React from 'react';

import styles from 'ui/common/components/tables/ListRow/listRow.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const ListRow = ({ children, className = '', onClick }: Props) => {
  return (
    <button className={`${styles.listRow} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
