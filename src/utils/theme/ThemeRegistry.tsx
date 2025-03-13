'use client';

import {ReactNode} from 'react';

import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {useServerInsertedHTML} from 'next/navigation';

import {theme} from './index';

export default function ThemeRegistry({children}: {children: ReactNode}) {
  const options = {key: 'mui'};
  const cache = createCache(options);

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
