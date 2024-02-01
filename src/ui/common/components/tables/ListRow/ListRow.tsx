import React from 'react';

import styles from 'ui/common/components/tables/ListRow/listRow.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  testId?: string;
};

export const ListRow = ({
  children,
  className = '',
  onClick,
  testId,
}: Props) => {
  return (
    <button
      className={`${styles.listRow} ${className}`}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
};
