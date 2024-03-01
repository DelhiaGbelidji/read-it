import {CssBaseline, ThemeProvider, Container} from '@mui/material'
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
              <Container sx={{minHeight: '90vH', p: 5}}>{children}</Container>
            </main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
