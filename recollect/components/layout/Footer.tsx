'use client';

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold mb-2">
              <span>Re:</span>
              <span className="text-gradient-pink-purple">connect</span>
            </div>
            <p className="text-background/70 text-sm">
              Your network is your most powerful asset
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-pink transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:hello@reconnect.app"
              className="hover:text-brand-orange transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Re:connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
