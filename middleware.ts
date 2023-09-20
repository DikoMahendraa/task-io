import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('access-token');

  if (!cookie) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }

  if (cookie) {
    return NextResponse.rewrite(new URL('/dashboard', request.url));
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
