import { Lato, Pacifico, Nunito } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '400',
});

export const latoBold = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '700',
});

export const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: '400',
});

export const nunitoLight = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: '200',
});

export const nunitoRegular = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: '500',
});
