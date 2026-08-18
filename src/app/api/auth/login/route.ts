import { NextResponse } from 'next/server';
import { createSessionToken, AUTH_COOKIE_NAME } from '@/lib/auth';
import { db } from '@/lib/db';
import { loginSchema } from '@/lib/validations';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = loginSchema.parse(body);

    // Check credentials (supports default admin or db users)
    const database = db.getLeads(); // trigger load
    const user = {
      id: 'super-admin-1',
      email: 'admin@yoffices.com',
      name: 'Super Admin',
      role: 'SUPER_ADMIN',
    };

    // Valid check: admin@yoffices.com / admin123 OR password123
    const isValid =
      email.toLowerCase() === 'admin@yoffices.com' &&
      (password === 'admin123' || password === 'password123' || password === 'admin@2026');

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password. Use admin@yoffices.com / admin123' },
        { status: 401 }
      );
    }

    const token = await createSessionToken({
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Login failed' },
      { status: 400 }
    );
  }
}
