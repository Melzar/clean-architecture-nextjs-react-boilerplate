'use client';

import Link from 'next/link';

import { useSession } from 'next-auth/react';

import { RiMoonClearFill } from 'react-icons/ri';

import React from 'react';

import { APP_ROUTES } from 'ui/common/navigation/routes';
import { useTopNavigation } from 'ui/common/components/layout/TopNavigation/topNavigation.hooks';

import { Switch } from 'ui/common/components/toggles/Switch/Switch';

import styles from './topNavigation.module.scss';

type Props = {
  className?: string;
};

export const TopNavigation = ({ className }: Props) => {
  const { isActive, isHome, onThemeToggle, onLogoutClick, onLoginClick } =
    useTopNavigation();
  const { data: session, status } = useSession();

  return (
    <nav
      className={`flex flex-row justify-end items-center ${styles.topNavigation} ${className}`}
    >
      <Link
        className={`mr-6 ${isHome() ? styles.active : ''}`}
        href={APP_ROUTES.HOME}
      >
        Home
      </Link>
      <Switch name="theme" id="theme" onChange={onThemeToggle}>
        <RiMoonClearFill />
      </Switch>
      {!session && status !== 'loading' && (
        <button className="mr-6" onClick={onLoginClick} type="button">
          Login
        </button>
      )}
      {session && (
        <>
          <Link
            className={`mr-6 ${
              isActive(APP_ROUTES.DASHBOARD) ? styles.active : ''
            }`}
            href={APP_ROUTES.DASHBOARD}
          >
            Dashboard
          </Link>
          <button className="mr-6" onClick={onLogoutClick} type="button">
            Logout
          </button>
          <span>
            {session.meta.email} {session.meta.role}
          </span>
        </>
      )}
    </nav>
  );
};
