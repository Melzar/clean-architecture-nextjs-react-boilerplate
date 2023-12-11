'use client';

import { useTheme } from 'next-themes';

import React from 'react';

import { THEME } from 'ui/common/consts/theme';

export const useTopNavigation = () => {
  const { setTheme } = useTheme();

  const onThemeToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const theme = event.target.checked ? THEME.DARK : THEME.LIGHT;
    setTheme(theme);
  };

  return {
    onThemeToggle,
  };
};
