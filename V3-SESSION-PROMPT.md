# Copy everything below this line into a new Claude Code session

/plan You are redesigning NimbleLogicAI.com as a premium V3 — a separate test project so I can compare it with the current live site.

## Phase 1: Research Your Tools (do this FIRST before writing any code)

### 1. Read the redesign brief:
Read ~/Projects/nimblelogic-v2/REDESIGN-BRIEF.md — it has everything: what to keep, what to change, brand colors, deployment commands, section order, file references.

### 2. Read your memory files:
Check ~/.claude/projects/-Users-carljean-louis--claude-skills/memory/ for project context, my preferences, account details, and deployment workflow.

### 3. Learn about Magic MCP (21st.dev):
Search the web for "21st.dev Magic MCP component library" and "Magic MCP best practices for Next.js Tailwind". Understand the component search API, builder, and refiner tools. Then do 10-15 searches using mcp__magic__21st_magic_component_inspiration for: hero sections, pricing tables, feature cards, FAQ accordions, navbars, animated backgrounds, scroll animations, gradient effects, blog cards, CTA sections, footer designs — all dark theme. Document the best components you find.

### 4. Learn about Google Stitch MCP:
Search the web for "Google Stitch MCP tools build_site get_screen_code" and "Google Stitch AI UI design workflow". Understand how to use build_site, get_screen_code, and get_screen_image to design page layouts and export production HTML/CSS. The Stitch MCP is configured with STITCH_USE_SYSTEM_GCLOUD=1 and authenticated as carljeanlouis1@gmail.com on project gen-lang-client-0541558230.

### 5. Study design inspiration:
Use Playwright to navigate to stripe.com, linear.app, and vercel.com. Take screenshots. Study their design patterns for a dark-theme AI services site.

## Phase 2: Set Up V3 Project

1. Copy v2 to v3: `cp -r ~/Projects/nimblelogic-v2 ~/Projects/nimblelogic-v3`
2. Clean git: `cd ~/Projects/nimblelogic-v3 && rm -rf .git && git init`
3. Create GitHub repo: `gh repo create nimblelogic-v3 --public --source=. --push`
4. Verify the base builds: `npm run build`

## Phase 3: Redesign Every Section

For each of the 12 sections (nav, hero, pain points, services, who we serve, demo, pricing x3, how it works, FAQ, footer):

1. Search Magic MCP for 2-3 component options
2. Optionally design in Stitch and export HTML
3. Pick the best approach
4. Implement while preserving ALL existing copy from src/lib/constants.ts
5. Add premium animations with Framer Motion

CRITICAL: All text, pricing, FAQ answers, blog content, CTAs, phone numbers must stay IDENTICAL to v2. Only the visual design changes.

## Phase 4: Polish & Deploy

1. Test at 375px mobile and 1440px desktop
2. Verify all CTAs link to cal.com booking URL
3. Verify demo phone number is clickable
4. `npm run build` — zero errors
5. Deploy:
```
CLOUDFLARE_API_TOKEN=DtxyZ5YPaqEqTFNCX0ZU4sktmdMu17AT5pk1n9Yu \
CLOUDFLARE_ACCOUNT_ID=a5a38762d1d72c405fe39231e0b1632f \
npx wrangler pages deploy out --project-name nimblelogic-v3 --branch main --commit-dirty=true
```
6. Give me the preview URL so I can compare v2 and v3 side by side.

## Brand Colors (STRICT)
- Background: #0A0F1C, surfaces: #111827, elevated: #1F2937
- Primary: #00D4AA (teal), Secondary: #0EA5E9 (blue)
- Text: #F9FAFB (headings), #9CA3AF (body), #6B7280 (muted)
- Accent gradient: #00D4AA → #0EA5E9
- NO PURPLE

Make it look like a $50,000 design agency built it. Be bold with design choices. Surprise me. The copy is locked — everything else is your canvas.
