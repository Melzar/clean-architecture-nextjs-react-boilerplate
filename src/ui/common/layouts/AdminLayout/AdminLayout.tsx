import React, { ReactNode } from 'react';

import styles from 'ui/common/layouts/shared/layout.module.scss';

import { SideNavigation } from 'ui/common/components/layout/SideNavigation/SideNavigation';
import { TopNavigation } from 'ui/common/components/layout/TopNavigation/TopNavigation';

type Props = {
  children: ReactNode;
};

export const AdminLayout = ({ children }: Props) => {
  return (
    <main className={`xl:mx-auto min-h-screen ${styles.layoutMain}`}>
      <SideNavigation />
      <section className={styles.layoutSection}>
        <TopNavigation className={styles.topNavigation} />
        {children}
      </section>
    </main>
  );
};
