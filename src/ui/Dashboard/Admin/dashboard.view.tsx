'use client';

import React from 'react';

import styles from 'ui/Dashboard/Admin/dashboard.module.scss';

import { PageHeader } from 'ui/common/components/typography/PageHeader/PageHeader';

export const DashboardView = () => {
  return (
    <>
      <div className={styles.header} />
      <div className={styles.container}>
        <PageHeader>Dashboard</PageHeader>
      </div>
    </>
  );
};
