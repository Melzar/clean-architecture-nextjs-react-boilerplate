import styles from 'app/page.module.scss';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center p-24 ${styles.container}`}
    >
      <div className="flex items-center">Home</div>
    </main>
  );
}
