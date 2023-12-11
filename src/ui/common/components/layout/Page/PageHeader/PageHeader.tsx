import styles from 'ui/common/components/layout/Page/PageHeader/pageHeader.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const PageHeader = ({ children, className }: Props) => (
  <div className={`${styles.pageHeader} ${className}`}>{children}</div>
);
