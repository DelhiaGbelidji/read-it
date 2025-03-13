'use client';

import { useEffect } from 'react';
import { theme } from '@/utils/theme';

export default function ThemeMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = theme.palette.primary.main;
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}
