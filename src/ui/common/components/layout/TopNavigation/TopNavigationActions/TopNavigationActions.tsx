'use client';

import { RiMoonClearFill } from 'react-icons/ri';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import React from 'react';

import topNavigationStyles from 'ui/common/components/layout/TopNavigation/topNavigation.module.scss';
import styles from 'ui/common/components/layout/TopNavigation/TopNavigationActions/topNavigationActions.module.scss';
import { Switch } from 'ui/common/components/toggles/Switch/Switch';
import { useTopNavigationActions } from 'ui/common/components/layout/TopNavigation/TopNavigationActions/topNavigationActions.hooks';
import { SWITCH_NAME } from 'ui/common/components/layout/TopNavigation/TopNavigationActions/topNavigationActions.consts';

export const TopNavigationActions = () => {
  const { onThemeToggle, onLogoutClick } = useTopNavigationActions();
  return (
    <>
      <Switch
        className={topNavigationStyles.topNavigationItem}
        name={SWITCH_NAME}
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
    </>
  );
};
