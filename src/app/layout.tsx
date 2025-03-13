import {Box, Container} from '@mui/material';
import {Metadata} from 'next';
import {getServerSession} from 'next-auth';
import {Toaster} from 'react-hot-toast';

import Footer from '@/components/footer/Footer';
import PrivateAppBar from '@/components/header/PrivateAppBar';
import {PublicAppBar} from '@/components/header/PublicAppBar';
import Providers from '@/components/Providers';
import ThemeRegistry from '@/utils/theme/ThemeRegistry';

import {authOptions} from './api/auth/[...nextauth]/options';
import ErrorBoundary from '../components/ErrorBoundary';
import ThemeMetaTag from '../components/ThemeMetaTag';

export const metadata: Metadata = {
  title: 'READ IT - Your Project Management Solution',
  description:
    'Manage your projects efficiently with READ IT. Features include project tracking, collaboration tools, and more.',
  keywords: 'project management, collaboration, task tracking',
  authors: [{name: 'READ IT Team'}],
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const fullName =
    session?.user?.firstname && session?.user?.lastname
      ? `${session.user.firstname} ${session.user.lastname}`
      : undefined;

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <ThemeMetaTag />
          <ErrorBoundary>
            <ThemeRegistry>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100vh',
                  height: '100vh',
                  overflow: 'hidden',
                }}>
                <Box
                  component='header'
                  sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                  }}>
                  {!session ? (
                    <PublicAppBar />
                  ) : (
                    <PrivateAppBar name={fullName} />
                  )}
                </Box>

                <Box
                  component='main'
                  sx={{
                    flex: 1,
                    overflow: 'auto',
                    mt: '64px',
                    mb: '60px',
                  }}>
                  <Toaster
                    position='top-right'
                    toastOptions={{
                      duration: 4000,
                    }}
                  />
                  <Container
                    component='section'
                    maxWidth='lg'
                    sx={{
                      py: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <Box component='article' sx={{flex: 1}}>
                      {children}
                    </Box>
                  </Container>
                </Box>

                <Box
                  sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                  }}>
                  <Footer />
                </Box>
              </Box>
            </ThemeRegistry>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
