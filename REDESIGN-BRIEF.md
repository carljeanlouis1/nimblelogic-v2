# NimbleLogic AI — V3 Premium Redesign Brief

## CRITICAL: Build as a SEPARATE project
- Create as `~/Projects/nimblelogic-v3/`
- Copy the FULL v2 codebase as your starting point: `cp -r ~/Projects/nimblelogic-v2 ~/Projects/nimblelogic-v3`
- Create a NEW GitHub repo: `gh repo create nimblelogic-v3 --public --source=. --push`
- Deploy to a SEPARATE Cloudflare Pages project: `nimblelogic-v3`
- Preview URL will be: nimblelogic-v3.pages.dev
- DO NOT touch nimblelogic-v2 or nimblelogicai.com — Carl will compare side by side

## About Carl & NimbleLogic AI
Carl Jean-Louis is a Product Manager at UPS transitioning to AI entrepreneurship. NimbleLogic AI is his top priority — an AI automation services company based in Brooklyn, NYC. The business provides AI phone agents (via Synthflow), personal assistants, and multi-agent AI team setups for businesses. Primary market is home service contractors, expanding to legal, healthcare, and professional services.

Carl's background: Industrial engineering (Penn State), AI/ML (Columbia), enterprise systems modernization (UPS). He's technically hands-on, manages his own infrastructure, and prefers autonomous execution — build first, show results.

## What to Keep IDENTICAL (DO NOT CHANGE)
- ALL copy/text — headings, descriptions, feature lists, pricing, FAQ answers
- ALL pricing tiers and numbers
- Blog posts (5 posts with images, author bio, CTAs)
- All URLs and routing structure (/blog, /blog/[slug])
- SEO: meta tags, JSON-LD schemas, sitemap, robots.txt, llms.txt
- Google Analytics (G-VV9MPS1289)
- All CTA links: https://cal.com/carl-jean-louis-ttpk27/clawsetup-discovery
- Demo phone number: (856) 666-3692
- Brand colors: BG #0A0F1C, primary #00D4AA, secondary #0EA5E9
- NO PURPLE anywhere

## What to Redesign (Your Creative Canvas)
Use BOTH Magic MCP and Google Stitch MCP to produce something that looks like a $50,000+ agency built it.

### Use Magic MCP (21st.dev) for:
- Search `mcp__magic__21st_magic_component_inspiration` for premium components
- Search terms: "hero section animated gradient", "pricing table dark theme", "feature cards glassmorphism", "FAQ accordion animated", "navbar sticky premium", "animated background particles", "scroll animation reveal", "gradient effects dark", "testimonial section", "CTA section premium", "blog card modern", "footer premium dark"
- Use `mcp__magic__21st_magic_component_builder` to generate custom components
- Use `mcp__magic__21st_magic_component_refiner` to polish components

### Use Google Stitch MCP for:
- Design full page layouts visually, then export HTML/CSS
- Use `build_site` to generate entire page designs
- Use `get_screen_code` to pull production HTML from designed screens
- Use `get_screen_image` for design reference screenshots
- Design each major section as a Stitch screen, then integrate into Next.js

### Sections to Redesign (in order of visual impact):
1. **Hero** — The money shot. Explore animated/3D heroes, gradient mesh, interactive elements
2. **Navigation** — Premium sticky nav with glassmorphism, maybe mega-menu for services
3. **Pain Points** — More dramatic stat presentation, animated counters with visual weight
4. **Services** — Flagship card needs to be showstopping. Secondary cards elevated
5. **Who We Serve** — Industry cards with hover animations, icons that feel premium
6. **Demo** — Phone number section with audio waveform, pulse effects, impossible to miss
7. **Pricing** — All 3 pricing sections (Voice Agent, Assistant, Operations) polished
8. **How It Works** — Timeline/steps with connecting animations
9. **FAQ** — Animated accordion with smooth transitions
10. **Blog** — Modernize listing page and post layout
11. **Footer** — Premium footer with gradient borders

### Design Quality Targets:
- Every section should feel visually distinct — no two sections should look the same
- Animations should be smooth and purposeful (Framer Motion)
- Mobile must be flawless at 375px
- Load fast — lazy load below-fold, optimize bundle
- The overall feel should match: Linear.app, Vercel.com, Stripe.com quality

## Tech Stack (keep the same)
- Next.js 14 + App Router + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion for animations
- Lucide React for icons
- Static export (output: "export" in next.config.mjs)

## Deployment
```bash
cd ~/Projects/nimblelogic-v3
npm run build
CLOUDFLARE_API_TOKEN=DtxyZ5YPaqEqTFNCX0ZU4sktmdMu17AT5pk1n9Yu \
CLOUDFLARE_ACCOUNT_ID=a5a38762d1d72c405fe39231e0b1632f \
npx wrangler pages deploy out --project-name nimblelogic-v3 --branch main --commit-dirty=true
```
Note: You may need to create the nimblelogic-v3 Pages project first if it doesn't exist.

## Homepage Sections (in order)
1. Navigation (sticky, glassmorphism)
2. Hero — "Intelligent Automation That Actually Works"
3. Pain Points — "Every Missed Call Is Revenue Lost" (amber stats)
4. Services — AI Voice Agent (flagship), AI Personal Assistant, AI Business Operations
5. Who We Serve — 4 industry cards (Home Services, Legal, Healthcare, Professional)
6. Demo — Phone number (856) 666-3692 (huge, clickable)
7. Pricing — AI Voice Agent (3 tiers: $199/$349/$599)
8. Pricing — AI Personal Assistant (4 tiers: $349/$599/$699/$949 + maintenance)
9. Pricing — AI Business Operations (Custom from $1,500)
10. How It Works — 3 steps
11. FAQ — 9 questions
12. Footer — 4-column grid

## Key Files Reference (in v2 codebase)
- `src/app/page.tsx` — homepage composition
- `src/app/layout.tsx` — root layout, meta tags, GA4, JSON-LD
- `src/lib/constants.ts` — ALL business data (pricing, FAQ, nav links, site info)
- `src/lib/blog-data.ts` — all blog post content
- `src/components/sections/` — all homepage sections
- `src/components/layout/` — navigation, footer, mobile nav
- `src/components/shared/` — reusable components
- `src/components/effects/` — visual effects
- `src/app/globals.css` — custom CSS
- `tailwind.config.ts` — full design system

## Process
1. Start by copying v2 to v3
2. Search Magic MCP for the best components for each section
3. Use Stitch to design key sections visually, export HTML
4. For each section, compare options and pick the best
5. Integrate while preserving all existing copy from constants.ts and blog-data.ts
6. Test at 375px (mobile) and 1440px (desktop)
7. Build, create GitHub repo, deploy to Cloudflare Pages as nimblelogic-v3
8. Share the preview URL with Carl for comparison

## Important Notes
- Site does NOT auto-deploy — always deploy via Wrangler after pushing
- Memory files at ~/.claude/projects/-Users-carljean-louis--claude-skills/memory/
- Carl prefers autonomous execution — build first, show results
- Zero build errors required before deploying
- Use parallel agents for speed when possible
