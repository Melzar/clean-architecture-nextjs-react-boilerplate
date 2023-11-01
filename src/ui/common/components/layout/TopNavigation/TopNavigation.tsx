'use client'

import Link from "next/link";
import { APP_ROUTES } from "ui/common/navigation/routes";
import { useTopNavigation } from "ui/common/components/layout/TopNavigation/topNavigation.hooks";

import styles from './topNavigation.module.scss'

export const TopNavigation = () => {
    const {isActive, isHome} = useTopNavigation();

    return (
    <nav className={`flex flex-row justify-end items-center`}>
        <Link className={`mr-6 ${isHome(APP_ROUTES.HOME) ? styles.active : ''}`} href={APP_ROUTES.HOME}>Home</Link>
        <Link className={`mr-6 ${isActive(APP_ROUTES.LOGIN) ? styles.active : ''}`} href={APP_ROUTES.LOGIN}>Login</Link>
    </nav>
    )
}
