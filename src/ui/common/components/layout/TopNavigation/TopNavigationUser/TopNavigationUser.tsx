import React from 'react';

import { useTopNavigationUser } from 'ui/common/components/layout/TopNavigation/TopNavigationUser/topNavigationUser.hooks';
import { latoBold } from 'ui/common/assets/fonts/fonts';
import { Pill } from 'ui/common/components/pills/Pill/Pill';

import topNavigationStyles from 'ui/common/components/layout/TopNavigation/topNavigation.module.scss';
import styles from 'ui/common/components/layout/TopNavigation/TopNavigationUser/topNavigationUser.module.scss';
import {
  HELLO_TEXT,
  USER_ROLE_TEXT,
} from 'ui/common/components/layout/TopNavigation/TopNavigationUser/TopNavigationUser.dictionary';

export const TopNavigationUser = async () => {
  const { session } = await useTopNavigationUser();

  return (
    session && (
      <>
        <span className={topNavigationStyles.topNavigationItem}>
          {HELLO_TEXT}
          <span className={latoBold.className}>{session.meta.fullName}</span>
        </span>
        <div className={styles.imageCircle} />
        <Pill
          className={topNavigationStyles.topNavigationItem}
          testId="user-role"
        >
          <span className={styles.status} />
          {USER_ROLE_TEXT} {session.meta.role}
        </Pill>
      </>
    )
  );
};
