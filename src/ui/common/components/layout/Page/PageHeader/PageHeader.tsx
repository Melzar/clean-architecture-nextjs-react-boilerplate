import styles from 'ui/common/components/layout/Page/PageHeader/pageHeader.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  testId?: string;
};

export const PageHeader = ({ children, className, testId }: Props) => (
  <div className={`${styles.pageHeader} ${className}`} data-testid={testId}>
    {children}
  </div>
);
