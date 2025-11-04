'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMISSION_KEY = 'waitlist_submitted';
const SUBMISSION_EMAIL_KEY = 'waitlist_email';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Check if user has already submitted
  useEffect(() => {
    const submitted = localStorage.getItem(SUBMISSION_KEY);
    const submittedEmail = localStorage.getItem(SUBMISSION_EMAIL_KEY);
    if (submitted === 'true' && submittedEmail) {
      setHasSubmitted(true);
      setIsSuccess(true);
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email.trim());
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Trim inputs
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    // Validate email
    if (!trimmedEmail) {
      setError('Email is required');
      setIsLoading(false);
      toast.error('Email is required');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      toast.error('Please enter a valid email address');
      return;
    }

    // Check if already submitted
    const submittedEmail = localStorage.getItem(SUBMISSION_EMAIL_KEY);
    if (submittedEmail && submittedEmail.toLowerCase() === trimmedEmail.toLowerCase()) {
      setError('You\'ve already joined the waitlist!');
      setIsLoading(false);
      toast('You\'re already on the list!', { icon: '✓' });
      return;
    }

    try {
      // Call API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          name: trimmedName || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      // Success!
      setIsSuccess(true);
      setHasSubmitted(true);
      localStorage.setItem(SUBMISSION_KEY, 'true');
      localStorage.setItem(SUBMISSION_EMAIL_KEY, trimmedEmail.toLowerCase());
      toast.success('🎉 You\'re on the list!');
      
      // Clear form
      setEmail('');
      setName('');

      // Optional: Reset success state after some time
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#363636',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '500',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="w-full max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center gap-4 p-8 bg-green-50 rounded-2xl border-2 border-green-200"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: 'spring', duration: 0.8 }}
              >
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-green-900">You're on the list!</h3>
              <p className="text-green-700 text-center">
                We'll let you know when Re:connect launches.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-14 text-lg px-6 rounded-full"
                disabled={isLoading}
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg px-6 rounded-full"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 text-lg gradient-pink-purple text-white hover:opacity-90 transition-opacity font-bold rounded-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Join the Waitlist'
                )}
              </Button>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm text-center font-medium"
                >
                  {error}
                </motion.p>
              )}

              <p className="text-sm text-muted-foreground text-center">
                Join 1,000+ students getting early access
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
