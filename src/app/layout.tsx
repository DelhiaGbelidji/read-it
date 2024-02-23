import {CssBaseline, ThemeProvider, Box, Container} from '@mui/material'
import {TopBar} from '@/components/headers/Header'
import {theme, COLORS} from '@/utils/theme/'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'
import {Footer} from '@/components/footer/Footer'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <CssBaseline />
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopBar />
            <main>
              <Container sx={{minHeight: '90vH'}}>{children}</Container>
            </main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
