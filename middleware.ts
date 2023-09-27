import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('access-token');

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!!cookie) {
      return NextResponse.rewrite(new URL(request.url, request.url));
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
