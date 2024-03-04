import {CssBaseline, ThemeProvider, Container} from '@mui/material'
import {theme} from '@/utils/theme/'
import Footer from '@/components/footer/Footer'
import Providers from '@/components/Providers'
import {getServerSession} from 'next-auth'
import {authOptions} from './api/auth/[...nextauth]/route'
import PrivateAppBar from '@/components/header/PrivateAppBar'
import {PublicAppBar} from '@/components/header/PublicAppBar'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  const fullName = `${session?.user?.firstname} + " " + ${session?.user.lastname}`

  return (
    <html lang='en'>
      <CssBaseline />
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            {session ? <PrivateAppBar name={fullName} /> : <PublicAppBar />}
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
