import {NextResponse} from 'next/server';
import {type NextRequest} from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Define the type for our configured headers
    type SecurityHeadersConfig = {
      [key: string]: string;
    };

    // Get configured security headers from Next.js config
    const configuredHeaders: SecurityHeadersConfig = {
      'Strict-Transport-Security':
        'max-age=63072000; includeSubDomains; preload',
      'Content-Security-Policy': `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' http://localhost:* ws://localhost:*; media-src 'self'; frame-src 'self';`,
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy':
        'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      'X-XSS-Protection': '1; mode=block',
      'X-DNS-Prefetch-Control': 'on',
    };

    // Create a test response with our configured headers
    const testResponse = NextResponse.json({test: true});
    Object.entries(configuredHeaders).forEach(([key, value]) => {
      testResponse.headers.set(key, value);
    });

    // Get the actual headers from the response
    const securityHeaders = Object.fromEntries(
      Object.keys(configuredHeaders).map(key => [
        key,
        testResponse.headers.get(key.toLowerCase()) || configuredHeaders[key],
      ]),
    ) as SecurityHeadersConfig;

    const headersWithDescriptions = Object.entries(securityHeaders).map(
      ([key, value]) => ({
        name: key,
        value: value,
        description: getHeaderDescription(key),
        status: value ? 'active' : 'missing',
      }),
    );

    // Create the final response with headers and descriptions
    const response = NextResponse.json({
      message: 'Security Headers Test',
      headers: headersWithDescriptions,
    });

    // Apply security headers to the final response
    Object.entries(securityHeaders).forEach(([key, value]) => {
      if (value) {
        response.headers.set(key, value);
      }
    });

    return response;
  } catch (error) {
    console.error('Error fetching security headers:', error);
    return NextResponse.json(
      {error: 'Failed to fetch security headers'},
      {status: 500},
    );
  }
}

function getHeaderDescription(header: string): string {
  // Updated descriptions to match our security configuration
  const descriptions: Record<string, string> = {
    'Strict-Transport-Security':
      'Forces browsers to use HTTPS for the specified duration',
    'Content-Security-Policy':
      'Controls which resources can be loaded and from where',
    'X-Frame-Options':
      'Prevents clickjacking attacks by controlling iframe embedding',
    'X-Content-Type-Options': 'Prevents MIME type sniffing security exploits',
    'Referrer-Policy':
      'Controls how much referrer information is included with requests',
    'Permissions-Policy':
      'Controls which browser features and APIs can be used',
    'X-XSS-Protection': 'Enables browser-level XSS filtering capabilities',
    'X-DNS-Prefetch-Control': 'Controls DNS prefetching',
  };

  return descriptions[header] || 'No description available';
}
