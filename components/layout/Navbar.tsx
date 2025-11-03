'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          className="text-2xl font-extrabold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-foreground">Re:</span>
          <span className="text-gradient-pink-purple">connect</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium hover:text-brand-purple transition-colors">
            Features
          </a>
          <a href="#about" className="font-medium hover:text-brand-purple transition-colors">
            About
          </a>
        </div>

        <Button
          size="lg"
          className="gradient-pink-purple text-white hover:opacity-90 transition-opacity font-bold"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join Waitlist
        </Button>
      </div>
    </motion.nav>
  );
}
