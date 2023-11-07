'use client';

import Link from 'next/link';

import { useSession } from 'next-auth/react';

import { APP_ROUTES } from 'ui/common/navigation/routes';
import { useTopNavigation } from 'ui/common/components/layout/TopNavigation/topNavigation.hooks';

import { THEME } from 'ui/common/consts/theme';

import styles from './topNavigation.module.scss';

export const TopNavigation = () => {
  const { isActive, isHome, setApplicationTheme, onLogoutClick, onLoginClick } =
    useTopNavigation();
  const { data: session } = useSession();

  return (
    <nav className="flex flex-row justify-end items-center">
      <Link
        className={`mr-6 ${isHome() ? styles.active : ''}`}
        href={APP_ROUTES.HOME}
      >
        Home
      </Link>
      <button
        className="mr-6"
        type="button"
        onClick={setApplicationTheme(THEME.DARK)}
      >
        Dark
      </button>
      <button
        className="mr-6"
        type="button"
        onClick={setApplicationTheme(THEME.LIGHT)}
      >
        Light
      </button>
      {!session && (
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
