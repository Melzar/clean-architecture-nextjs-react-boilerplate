import React from 'react';

import { TopNavigationActions } from 'ui/common/components/layout/TopNavigation/TopNavigationActions/TopNavigationActions';
import { TopNavigationUser } from 'ui/common/components/layout/TopNavigation/TopNavigationUser/TopNavigationUser';

import styles from './topNavigation.module.scss';

type Props = {
  className?: string;
};

export const TopNavigation = ({ className }: Props) => (
  <nav className={`${styles.topNavigation} ${className}`}>
    <TopNavigationUser />
    <TopNavigationActions />
  </nav>
);
