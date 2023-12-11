import { ReactNode } from 'react';

import { nunitoLight } from 'ui/common/assets/fonts/fonts';
import styles from 'ui/common/components/typography/SectionHeader/sectionHeader.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};
export const SectionHeader = ({ children, className }: Props) => {
  return (
    <h2
      className={`${nunitoLight.className} ${styles.sectionHeader} ${className}`}
    >
      {children}
    </h2>
  );
};
