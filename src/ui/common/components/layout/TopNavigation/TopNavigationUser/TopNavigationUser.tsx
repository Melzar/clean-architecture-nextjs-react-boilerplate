import React from 'react';

import { useTopNavigationUser } from 'ui/common/components/layout/TopNavigation/TopNavigationUser/topNavigationUser.hooks';
import { latoBold } from 'ui/common/assets/fonts/fonts';
import { Pill } from 'ui/common/components/pills/Pill/Pill';

import topNavigationStyles from 'ui/common/components/layout/TopNavigation/topNavigation.module.scss';
import styles from 'ui/common/components/layout/TopNavigation/TopNavigationUser/topNavigationUser.module.scss';

export const TopNavigationUser = async () => {
  const { session } = await useTopNavigationUser();

  return (
    session && (
      <>
        <span className={topNavigationStyles.topNavigationItem}>
          Hello,{' '}
          <span className={latoBold.className}>{session.meta.fullName}</span>
        </span>
        <div className={styles.imageCircle} />
        <Pill className={topNavigationStyles.topNavigationItem}>
          <span className={styles.status} />
          You&apos;re {session.meta.role}
        </Pill>
      </>
    )
  );
};
