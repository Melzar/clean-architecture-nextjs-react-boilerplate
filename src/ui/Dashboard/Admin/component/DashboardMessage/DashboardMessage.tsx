import { ReactNode } from 'react';

import styles from 'ui/Dashboard/Admin/component/DashboardMessage/dashboardMessage.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const DashboardMessage = ({ children, className = '' }: Props) => (
  <div className={`${styles.dashboardMessage} ${className}`}>{children}</div>
);
