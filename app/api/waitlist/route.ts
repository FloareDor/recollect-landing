import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting map (in production, use Redis or similar)
const submissionTracker = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 3;

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [email, timestamp] of submissionTracker.entries()) {
    if (now - timestamp > RATE_LIMIT_WINDOW) {
      submissionTracker.delete(email);
    }
  }
}, RATE_LIMIT_WINDOW);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check rate limiting
    const now = Date.now();
    const lastSubmission = submissionTracker.get(normalizedEmail);
    
    if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW) {
      return NextResponse.json(
        { error: 'Please wait before submitting again' },
        { status: 429 }
      );
    }

    // Update submission tracker
    submissionTracker.set(normalizedEmail, now);

    // Log submission (in production, save to database)
    console.log('New waitlist submission:', {
      email: normalizedEmail,
      name: name?.trim() || 'Not provided',
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    });

    // TODO: In production, add logic to:
    // 1. Save to database (Supabase, Firebase, Postgres, etc.)
    // 2. Send confirmation email (Resend, SendGrid, etc.)
    // 3. Add to email marketing list (Mailchimp, ConvertKit, etc.)
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
