import { Box, Container } from '@mui/material';
import Footer from '@/components/footer/Footer';
import Providers from '@/components/Providers';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';
import PrivateAppBar from '@/components/header/PrivateAppBar';
import { PublicAppBar } from '@/components/header/PublicAppBar';
import { Toaster } from 'react-hot-toast';
import { Metadata } from 'next';
import ErrorBoundary from '../components/ErrorBoundary';
import ThemeMetaTag from '../components/ThemeMetaTag';
import ThemeRegistry from '@/utils/theme/ThemeRegistry';

export const metadata: Metadata = {
  title: 'READ IT - Your Project Management Solution',
  description: 'Manage your projects efficiently with READ IT. Features include project tracking, collaboration tools, and more.',
  keywords: 'project management, collaboration, task tracking',
  authors: [{ name: 'READ IT Team' }],
  robots: 'index, follow'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const fullName = session?.user?.firstname && session?.user?.lastname
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
              {!session ? <PublicAppBar /> : <PrivateAppBar name={fullName} />}
              <main>
                <Toaster
                  position='top-right'
                  toastOptions={{
                    duration: 4000,
                  }}
                />
                <Container component='section' maxWidth='lg' sx={{ py: 4 }}>
                  <Box component='article'>{children}</Box>
                </Container>
              </main>
              <Footer />
            </ThemeRegistry>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
