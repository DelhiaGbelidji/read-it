import {NextResponse} from 'next/server';

import type {NextRequest} from 'next/server';

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Définition des politiques de sécurité
  const isDevelopment = process.env.NODE_ENV === 'development';

  const cspHeader = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      ...(isDevelopment ? ['http://localhost:*'] : []),
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'",
      'https://fonts.googleapis.com',
      ...(isDevelopment ? ['http://localhost:*'] : []),
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com',
      ...(isDevelopment ? ['http://localhost:*'] : []),
    ],
    'connect-src': [
      "'self'",
      'https://www.googleapis.com',
      ...(isDevelopment ? ['http://localhost:*', 'ws://localhost:*'] : []),
    ],
    'img-src': [
      "'self'",
      'data:',
      'https:',
      'blob:',
      'http://books.google.com',
      'https://books.google.com',
      'http://*.googleusercontent.com',
      'https://*.googleusercontent.com',
      ...(isDevelopment ? ['http://localhost:*'] : []),
    ],
    'media-src': ["'self'"],
    'frame-src': ["'self'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'self'"],
  };

  // Construction de la chaîne CSP
  const cspString = Object.entries(cspHeader)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');

  // Ajout des en-têtes de sécurité
  const securityHeaders = {
    'Content-Security-Policy': cspString,
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  };

  // Application des en-têtes de sécurité
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

// Configuration des chemins à gérer par le middleware
// Ne pas appliquer le middleware aux ressources statiques et aux routes API
export const config = {
  matcher: ['/((?!api/|_next/|favicon.ico).*)'],
};
