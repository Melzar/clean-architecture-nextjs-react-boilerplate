import { ReactNode } from 'react';

import styles from 'ui/Dashboard/Admin/components/DashboardMessage/dashboardMessage.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  testId?: string;
};

export const DashboardMessage = ({
  children,
  className = '',
  testId,
}: Props) => (
  <div
    className={`${styles.dashboardMessage} ${className}`}
    data-testid={testId}
  >
    {children}
  </div>
);
