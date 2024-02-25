import {CssBaseline, ThemeProvider, Box, Container} from '@mui/material'
import {TopBar} from '@/components/headers/Header'
import {theme} from '@/utils/theme/'
import {Footer} from '@/components/footer/Footer'
import Providers from '@/components/Providers'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <CssBaseline />
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            <TopBar />
            <main>
              <Container sx={{minHeight: '90vH'}}>{children}</Container>
            </main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
