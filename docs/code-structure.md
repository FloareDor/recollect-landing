# Re:connect Landing Page - Code Structure

## Overview
This is a Next.js 14+ application built with TypeScript, using the App Router architecture. The landing page is designed for Re:connect, a personal CRM for managing your professional network.

**Tech Stack:**
- **Framework:** Next.js 16.0.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

---

## Project Directory Structure

```
/workspace/
├── app/                      # Next.js App Router directory
│   ├── api/                  # API routes
│   │   └── waitlist/         # Waitlist submission endpoint
│   │       └── route.ts      # POST handler for waitlist form
│   ├── favicon.ico           # Site favicon
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with fonts and metadata
│   └── page.tsx              # Home page (main landing page)
│
├── components/               # React components
│   ├── layout/              # Layout components
│   │   ├── Footer.tsx       # Site footer with social links
│   │   └── Navbar.tsx       # Navigation bar with sticky CTA
│   │
│   ├── sections/            # Landing page sections
│   │   ├── CTASection.tsx           # Final call-to-action section
│   │   ├── FeaturesSection.tsx      # Bento-box features grid
│   │   ├── HeroSection.tsx          # Hero section with gradient
│   │   ├── ImportSection.tsx        # Import contacts section
│   │   ├── ProblemSection.tsx       # Problem statement section
│   │   ├── StatsSection.tsx         # Social proof/stats section
│   │   └── UseCasesSection.tsx      # Use cases with mockups
│   │
│   └── ui/                  # Reusable UI components
│       ├── AnimatedSection.tsx      # Scroll-triggered animations wrapper
│       ├── badge.tsx                # shadcn/ui Badge component
│       ├── BentoCard.tsx            # Feature card component
│       ├── button.tsx               # shadcn/ui Button component
│       ├── card.tsx                 # shadcn/ui Card component
│       ├── GradientText.tsx         # Text with gradient effect
│       ├── input.tsx                # shadcn/ui Input component
│       ├── PhoneMockup.tsx          # 3D phone mockup with tilt
│       └── WaitlistForm.tsx         # Waitlist signup form
│
├── docs/                    # Documentation
│   ├── Adam_advice/         # Product advice from Adam
│   ├── design_references/   # Design inspiration images
│   ├── code-structure.md    # This file
│   ├── landing-page-implementation-plan.md
│   └── vision.md            # Product vision document
│
├── lib/                     # Utility libraries
│   └── utils.ts             # Utility functions (cn for class merging)
│
├── public/                  # Static assets
│   └── *.svg                # SVG icons and images
│
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project README
```

---

## Key Architecture Patterns

### 1. Component Organization

#### **Layout Components** (`components/layout/`)
Persistent UI elements that appear across the entire site:
- `Navbar.tsx` - Top navigation with logo and CTA button
- `Footer.tsx` - Bottom footer with copyright and links

#### **Section Components** (`components/sections/`)
Individual sections of the landing page, each representing a distinct marketing message:
- `HeroSection.tsx` - First impression with main value proposition
- `ProblemSection.tsx` - Relatable problem scenarios
- `FeaturesSection.tsx` - Core feature showcase in bento-box layout
- `UseCasesSection.tsx` - Real-world usage examples
- `StatsSection.tsx` - Market size and social proof
- `ImportSection.tsx` - "No cold start" messaging
- `CTASection.tsx` - Final conversion point with waitlist form

All section components:
- Use `'use client'` directive for client-side interactivity
- Leverage `AnimatedSection` wrapper for scroll animations
- Follow consistent spacing (py-24 for vertical padding)
- Use semantic HTML5 section tags

#### **UI Components** (`components/ui/`)
Reusable building blocks used across sections:
- **shadcn/ui components**: `button.tsx`, `input.tsx`, `card.tsx`, `badge.tsx`
- **Custom components**:
  - `AnimatedSection.tsx` - Framer Motion wrapper for scroll-triggered fade-in animations
  - `GradientText.tsx` - Text with animated gradient effects
  - `BentoCard.tsx` - Feature card with hover effects and gradients
  - `PhoneMockup.tsx` - 3D-tilted phone mockup using mouse position
  - `WaitlistForm.tsx` - Email signup with validation and toast notifications

### 2. Page Structure

**Main Page** (`app/page.tsx`):
```typescript
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <UseCasesSection />
        <StatsSection />
        <ImportSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
```

The page follows a linear storytelling flow:
1. **Hero** - Hook the visitor
2. **Problem** - Show you understand their pain
3. **Features** - Present your solution
4. **Use Cases** - Demonstrate real-world value
5. **Stats** - Build credibility
6. **Import** - Remove "start from zero" friction
7. **CTA** - Convert to waitlist signup

### 3. API Routes

**Waitlist API** (`app/api/waitlist/route.ts`):
- POST endpoint for waitlist submissions
- Email validation using regex
- Rate limiting (3 submissions per email per minute)
- Returns JSON responses with proper HTTP status codes
- Logs submissions (ready for database integration)

**Features:**
- Email normalization (trim, lowercase)
- In-memory rate limiting tracker
- Graceful error handling
- Extensible for future integrations (database, email service)

### 4. Styling System

**Global Styles** (`app/globals.css`):
- Tailwind CSS v4 with `@import "tailwindcss"`
- Custom CSS variables for brand colors
- Uses OKLCH color space for better color gradients
- Plus Jakarta Sans font family for bold, modern typography

**Custom Gradient Classes:**
Defined via Tailwind utilities in component files:
- `gradient-pink-purple` - Pink to purple gradient
- `gradient-orange-yellow` - Orange to yellow gradient
- `gradient-blue-teal` - Blue to teal gradient

**Design Tokens:**
- Brand colors: pink, purple, blue, teal, orange, yellow, green
- Neutral backgrounds: cream, beige
- Consistent border radius: `--radius: 0.625rem`
- Typography scale with bold weights (800-900)

### 5. Animation Strategy

**Scroll-Based Animations** (`AnimatedSection.tsx`):
```typescript
// Fade in + slide up on scroll
// Uses Framer Motion's viewport detection
<AnimatedSection delay={0.2}>
  <YourContent />
</AnimatedSection>
```

**Animation Types:**
1. **Entry animations** - Fade in + slide up when scrolling into view
2. **Hover effects** - Scale, shadow, and glow on interactive elements
3. **Micro-interactions** - Loading spinners, button ripples
4. **3D effects** - Phone mockup tilt based on mouse position
5. **Decorative animations** - Rotating/floating sparkles and shapes

All animations use Framer Motion's `motion` components with spring physics for natural feel.

---

## Data Flow

### Waitlist Submission Flow

```
User fills form → WaitlistForm.tsx
                    ↓
            Client-side validation
            (email format, required fields)
                    ↓
            Check localStorage
            (prevent duplicate submissions)
                    ↓
        POST to /api/waitlist → route.ts
                                    ↓
                        Server-side validation
                        Rate limiting check
                        Log submission
                                    ↓
                        Return success/error
                                    ↓
        Display toast notification ← WaitlistForm.tsx
        Update localStorage
        Show success message
```

**Duplicate Prevention Strategy:**
- Client-side: localStorage stores submitted email
- Server-side: In-memory rate limiting per email
- Both layers prevent spam and provide good UX

---

## Utility Functions

**`lib/utils.ts`:**
```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
- Combines `clsx` for conditional classes with `tailwind-merge` to resolve conflicts
- Used throughout components for dynamic className generation

---

## Configuration Files

### `components.json`
shadcn/ui configuration defining:
- Component style (default)
- Base color (slate)
- CSS variables usage
- TypeScript paths
- Tailwind config location

### `tsconfig.json`
TypeScript compiler options:
- Strict mode enabled
- Path aliases: `@/*` → `./*`
- Target: ES2017
- Module: ESNext

### `next.config.ts`
Next.js configuration (currently using defaults)

### `package.json` - Key Dependencies:
```json
{
  "dependencies": {
    "next": "16.0.1",
    "react": "19.2.0",
    "framer-motion": "^12.23.24",
    "react-hot-toast": "^2.x",
    "lucide-react": "^0.552.0",
    "@radix-ui/react-slot": "^1.2.3"
  }
}
```

---

## Development Workflow

### Available Scripts:
```bash
npm run dev     # Start development server (localhost:3000)
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Adding New Components:
1. **Section component:** Add to `components/sections/`, import in `app/page.tsx`
2. **UI component:** Add to `components/ui/`, use across sections
3. **shadcn component:** Run `npx shadcn add <component-name>`

### Styling Conventions:
- Use Tailwind utility classes (no custom CSS unless necessary)
- Follow mobile-first responsive design
- Use `cn()` utility for conditional classes
- Leverage CSS variables for brand colors
- Keep animations performant (use transform/opacity)

---

## State Management

**Currently No Global State Library**
- Each component manages its own local state with `useState`
- Form state is managed in `WaitlistForm.tsx`
- Persistence via `localStorage` for waitlist submission tracking
- No need for Redux/Zustand at this scale

**State Examples:**
- `WaitlistForm`: email, name, isLoading, isSuccess, error, hasSubmitted
- `Navbar`: mobile menu open/closed (if implemented)
- `AnimatedSection`: visibility state via Framer Motion's `inView`

---

## Performance Considerations

1. **Code Splitting:** Next.js automatically splits code by route
2. **Client Components:** Only interactive components use `'use client'`
3. **Animation Performance:** Framer Motion uses GPU-accelerated transforms
4. **Image Optimization:** Ready for Next.js Image component (when images added)
5. **Bundle Size:** Minimal dependencies, tree-shaking enabled

---

## Future Enhancement Areas

### Short Term (Phase 6 & 7):
- [ ] Add actual phone mockup images
- [ ] Optimize for mobile/tablet layouts
- [ ] Add SEO meta tags and Open Graph images
- [ ] Set up analytics tracking
- [ ] Implement backend storage (database)
- [ ] Add email confirmation service
- [ ] Deploy to Vercel

### Long Term:
- [ ] A/B testing framework
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Blog section for content marketing
- [ ] Admin dashboard for waitlist management

---

## Testing Strategy

**Current Testing Status:**
- Manual testing of form validation ✓
- Manual testing of success/error flows ✓
- Cross-browser testing pending

**Recommended Testing Setup:**
- Unit tests: Vitest + React Testing Library
- E2E tests: Playwright
- Visual regression: Chromatic or Percy

---

## Environment Variables

**No environment variables currently required for local development.**

**For production deployment, you'll need:**
```env
# Database
DATABASE_URL=<your_database_url>

# Email Service (optional)
RESEND_API_KEY=<your_resend_key>
# or
SENDGRID_API_KEY=<your_sendgrid_key>

# Analytics (optional)
NEXT_PUBLIC_GA_ID=<google_analytics_id>
```

---

## Troubleshooting

### Common Issues:

1. **Animations not working:**
   - Ensure component has `'use client'` directive
   - Check Framer Motion is installed

2. **Styles not applying:**
   - Clear `.next` cache: `rm -rf .next`
   - Restart dev server

3. **API route 404:**
   - Ensure file is named `route.ts` (not `route.tsx`)
   - Check file is in correct directory: `app/api/waitlist/route.ts`

4. **TypeScript errors:**
   - Run `npm install` to ensure all types are installed
   - Check `tsconfig.json` paths are correct

---

## Contributing Guidelines

When adding new features:
1. Follow the existing folder structure
2. Use TypeScript for all new files
3. Keep components small and focused
4. Add animations consistently with existing sections
5. Test on mobile, tablet, and desktop
6. Update this documentation for significant changes

---

## Contact & Resources

- **Project Repository:** [Add GitHub URL]
- **Design System:** Based on shadcn/ui (https://ui.shadcn.com)
- **Documentation:** See `docs/` folder for product vision and implementation plan
- **Deployment:** Optimized for Vercel (https://vercel.com)

---

**Last Updated:** 2025-11-03  
**Version:** 1.0 (Phase 5 Complete)  
**Maintained by:** Re:connect Development Team
