'use client';

import Link from 'next/link';

import { MdDashboard } from 'react-icons/md';
import { PiPackageLight, PiUsersThreeLight } from 'react-icons/pi';
import React from 'react';

import styles from 'ui/common/components/layout/SideNavigation/SideNavigationLinks/sideNavigationLinks.module.scss';
import { APP_ADMIN_ROUTES } from 'ui/common/navigation/routes';
import { useSideNavigationLinks } from 'ui/common/components/layout/SideNavigation/SideNavigationLinks/sideNavigationLinks.hooks';

export const SideNavigationLinks = () => {
  const { isActive } = useSideNavigationLinks();

  return (
    <>
      <Link
        href={APP_ADMIN_ROUTES.DASHBOARD()}
        className={`${
          isActive(APP_ADMIN_ROUTES.DASHBOARD()) ? styles.active : null
        } ${styles.navItem}`}
      >
        <MdDashboard className={styles.navIcon} />
      </Link>
      <Link
        href={APP_ADMIN_ROUTES.CLIENTS()}
        className={`${
          isActive(APP_ADMIN_ROUTES.CLIENTS()) ? styles.active : null
        } ${styles.navItem}`}
      >
        <PiUsersThreeLight className={styles.navIcon} />
      </Link>
      <Link
        href={APP_ADMIN_ROUTES.PACKAGES()}
        className={`${
          isActive(APP_ADMIN_ROUTES.PACKAGES()) ? styles.active : null
        } ${styles.navItem}`}
      >
        <PiPackageLight className={styles.navIcon} />
      </Link>
    </>
  );
};
