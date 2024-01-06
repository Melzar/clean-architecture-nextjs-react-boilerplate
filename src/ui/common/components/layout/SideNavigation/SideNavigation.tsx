import React from 'react';

import styles from 'ui/common/components/layout/SideNavigation/sideNavigation.module.scss';

import { TextLogo } from 'ui/common/components/typography/TextLogo/TextLogo';
import { SideNavigationLinks } from 'ui/common/components/layout/SideNavigation/SideNavigationLinks/SideNavigationLinks';

export const SideNavigation = () => (
  <aside className={styles.sideNavigation}>
    <TextLogo className={styles.logo}>C</TextLogo>
    <SideNavigationLinks />
  </aside>
);
