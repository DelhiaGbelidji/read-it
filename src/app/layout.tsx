import {CssBaseline, ThemeProvider, Box} from '@mui/material'
import {theme} from '@/utils/theme/'
import Footer from '@/components/footer/Footer'
import Providers from '@/components/Providers'
import {getServerSession} from 'next-auth'
import PrivateAppBar from '@/components/header/PrivateAppBar'
import {PublicAppBar} from '@/components/header/PublicAppBar'
import {Toaster} from 'react-hot-toast'
import {authOptions} from './api/auth/[...nextauth]/options'

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
            {!session ? <PublicAppBar /> : <PrivateAppBar name={fullName} />}
            <main>
              <Toaster />
              <Box>{children}</Box>
            </main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
