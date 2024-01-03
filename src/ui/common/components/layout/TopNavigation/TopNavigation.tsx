'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { RiMoonClearFill } from 'react-icons/ri';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';

import { useTopNavigation } from 'ui/common/components/layout/TopNavigation/topNavigation.hooks';
import { Switch } from 'ui/common/components/toggles/Switch/Switch';
import { Pill } from 'ui/common/components/pills/Pill/Pill';
import { latoBold } from 'ui/common/assets/fonts/fonts';

import styles from './topNavigation.module.scss';

type Props = {
  className?: string;
};

export const TopNavigation = ({ className }: Props) => {
  const { onThemeToggle, onLogoutClick } = useTopNavigation();
  const { data: session } = useSession();

  return (
    <nav className={`${styles.topNavigation} ${className}`}>
      {session && (
        <>
          <span className={styles.topNavigationItem}>
            Hello,{' '}
            <span className={latoBold.className}>{session.meta.fullName}</span>
          </span>
          <div className={styles.imageCircle} />
          <Pill className={styles.topNavigationItem}>
            <span className={styles.status} />
            You&apos;re {session.meta.role}
          </Pill>
        </>
      )}
      <Switch
        className={styles.topNavigationItem}
        name="theme"
        id="theme"
        onChange={onThemeToggle}
      >
        <RiMoonClearFill />
      </Switch>
      <button
        onClick={onLogoutClick}
        className={`${styles.topNavigationLogout}`}
      >
        <MdOutlinePowerSettingsNew className={styles.topNavigationLogoutIcon} />
      </button>
    </nav>
  );
};
