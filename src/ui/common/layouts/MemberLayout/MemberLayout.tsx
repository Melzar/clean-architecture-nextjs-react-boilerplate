import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MemberLayout = ({ children }: Props) => {
  return (
    <>
      <aside />
      <main className="xl:container xl:mx-auto flex min-h-screen flex-col items-center justify-center p-24">
        {children}
      </main>
    </>
  );
};
