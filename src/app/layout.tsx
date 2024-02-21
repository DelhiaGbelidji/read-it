import {CssBaseline, ThemeProvider, Box} from '@mui/material'
import {TopBar} from '@/components/headers/AppBar'
import {theme, COLORS} from '@/utils/theme/'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <CssBaseline />
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopBar />
            <main>{children}</main>
            <footer>
              <Box sx={{bgcolor: `${COLORS.lightGrey}`, height: '70px'}}></Box>
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
