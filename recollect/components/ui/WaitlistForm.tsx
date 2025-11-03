'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      setIsLoading(false);
      return;
    }

    // Simulate API call (replace with actual API call later)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setEmail('');
      setName('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
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
            <CheckCircle2 className="w-16 h-16 text-green-600" />
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
                className="text-red-600 text-sm text-center"
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
  );
}
