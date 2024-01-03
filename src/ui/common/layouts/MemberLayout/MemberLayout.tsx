import React, { ReactNode } from 'react';

import styles from 'ui/common/layouts/AdminLayout/adminLayout.module.scss';
import { TopNavigation } from 'ui/common/components/layout/TopNavigation/TopNavigation';

type Props = {
  children: ReactNode;
};

export const MemberLayout = ({ children }: Props) => {
  return (
    <main className="xl:mx-auto flex min-h-screen flex-row">
      <section className={styles.adminSection}>
        <TopNavigation className={styles.topNavigation} />
        {children}
      </section>
    </main>
  );
};
