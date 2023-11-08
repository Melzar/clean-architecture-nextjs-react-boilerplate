import { ReactNode } from 'react';

import styles from 'ui/common/components/layout/TopHeader/topHeader.module.scss';

type Props = {
  children: ReactNode;
};

export const TopHeader = ({ children }: Props) => {
  return (
    <header className={`flex w-screen items-center ${styles.headerWrapper}`}>
      <div
        className={`xl:container xl:mx-auto relative ${styles.headerContainer}`}
      >
        {children}
      </div>
    </header>
  );
};
