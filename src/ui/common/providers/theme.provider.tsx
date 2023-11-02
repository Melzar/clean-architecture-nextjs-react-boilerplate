'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// eslint-disable-next-line import/no-unresolved
import { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({
  children,
  defaultTheme,
  forcedTheme,
  themes,
  disableTransitionOnChange,
  enableColorScheme,
  enableSystem,
  nonce,
  value,
  storageKey,
  attribute,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      themes={themes}
      value={value}
      forcedTheme={forcedTheme}
      disableTransitionOnChange={disableTransitionOnChange}
      enableColorScheme={enableColorScheme}
      enableSystem={enableSystem}
      nonce={nonce}
      storageKey={storageKey}
      attribute={attribute}
    >
      {children}
    </NextThemesProvider>
  );
}
