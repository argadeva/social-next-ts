import  { NextRequest, NextResponse } from 'next/server';

type Environment = "production" | "development" | "other";

export function middleware(request: NextRequest) {
  const currentEnv = process.env.NODE_ENV as Environment;
  if (currentEnv === 'production' && request.nextUrl.pathname.startsWith('/') && request.nextUrl.protocol !== 'https:') {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`, 301
    );
  }
}