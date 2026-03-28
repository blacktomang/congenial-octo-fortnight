import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const vercelCountry = request.headers.get('x-vercel-ip-country');
    return NextResponse.json({ country: vercelCountry });
}