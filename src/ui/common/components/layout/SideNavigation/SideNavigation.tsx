import React from 'react';

import { MdOutlinePowerSettingsNew, MdDashboard } from 'react-icons/md';

import { PiPackageLight, PiUsersThreeLight } from 'react-icons/pi';

import Link from 'next/link';

import styles from 'ui/common/components/layout/SideNavigation/sideNavigation.module.scss';

import { TextLogo } from 'ui/common/components/typography/TextLogo/TextLogo';
import { useSideNavigation } from 'ui/common/components/layout/SideNavigation/sideNavigation.hooks';
import { APP_ADMIN_ROUTES } from 'ui/common/navigation/routes';

export const SideNavigation = () => {
  const { isActive, onLogoutClick } = useSideNavigation();

  return (
    <aside className={styles.sideNavigation}>
      <TextLogo className={styles.logo}>C</TextLogo>
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
      <button
        onClick={onLogoutClick}
        className={`${styles.navItem} ${styles.navItemLogout}`}
      >
        <MdOutlinePowerSettingsNew className={styles.navIcon} />
      </button>
    </aside>
  );
};
