// Imports:
import {
  ABSOLUTE_ROUTES,
  PROTECTED_ROUTES_SET,
} from '@/constants/Paths/Routes';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;

  if (PROTECTED_ROUTES_SET.has(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL(ABSOLUTE_ROUTES.ROOT, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:slug*'],
};
