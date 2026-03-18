export const SITE = {
  name: "NimbleLogic AI",
  tagline: "Built with AI. Backed by humans. Based in New York City.",
  url: "https://nimblelogicai.com",
  email: "hello@nimblelogicai.com",
  phone: "(856) 666-3692",
  phoneTel: "tel:8566663692",
  location: "New York City",
  bookingUrl: "https://cal.com/carl-jean-louis-ttpk27/clawsetup-discovery",
  linkedin: "https://linkedin.com/company/nimblelogicai",
  twitter: "https://x.com/nimblelogicai",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PAIN_POINTS = [
  {
    stat: "80%",
    description: "of callers who hit voicemail never call back",
  },
  {
    stat: "$500–2,000",
    description: "average value of a missed service call",
  },
  {
    stat: "Right Now",
    description: "Your competitors are answering those calls right now",
  },
] as const;

export const SERVICES = [
  {
    id: "voice-agent",
    title: "Your 24/7 AI Receptionist",
    description:
      "NimbleLogic AI answers every call — day or night — with a friendly, professional voice that sounds human. It books appointments, answers common questions, and captures every lead so you can focus on the work that matters.",
    features: [
      "24/7 coverage — nights, weekends, holidays",
      "Books appointments directly into your calendar",
      "Sounds natural, not robotic",
      "Captures every lead — name, number, job details sent to you instantly",
      "Works with Google Calendar, Housecall Pro, Jobber, ServiceTitan",
      "No contracts, cancel anytime",
    ],
    audience: "Plumbers, HVAC techs, electricians, roofers, home service contractors",
    hero: true,
  },
  {
    id: "personal-assistant",
    title: "Your Own AI, Professionally Installed",
    description:
      "Not another chatbot. A real AI assistant that handles your email, manages your calendar, does deep research, and runs 24/7. Set up on your hardware so your data stays yours.",
    features: [
      "Email triage and smart replies in your voice",
      "Calendar management and scheduling",
      "Always-on messaging via WhatsApp, Telegram, Signal",
      "Deep web research and daily briefings",
      "Memory — remembers your preferences and projects",
      "Runs on YOUR hardware — data never leaves your control",
    ],
    setupNote: "In-person NYC or remote anywhere",
    hero: false,
  },
  {
    id: "business-ops",
    title: "AI Teams That Run Your Operations",
    description:
      "Multi-agent AI systems that handle customer inquiries, automate lead follow-up, manage workflows, and scale your business without scaling your headcount.",
    features: [
      "Automated customer inquiry handling",
      "Intelligent lead follow-up sequences",
      "Workflow automation and management",
      "Scale operations without scaling headcount",
    ],
    hero: false,
  },
] as const;

export const PRICING_PHONE = [
  {
    name: "Starter",
    price: 199,
    period: "/mo",
    description: "Perfect for getting started",
    features: [
      "100 calls per month",
      "1 calendar integration",
      "Email notifications",
      "Basic AI setup",
      "Business hours priority",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: 349,
    period: "/mo",
    description: "Most popular for growing businesses",
    features: [
      "300 calls per month",
      "Multiple calendar integrations",
      "SMS follow-ups",
      "Priority support",
      "Custom greeting scripts",
      "Call analytics dashboard",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 599,
    period: "/mo",
    description: "For high-volume operations",
    features: [
      "Unlimited calls",
      "Custom AI scripts",
      "Dedicated account manager",
      "API access",
      "Multi-location support",
      "Advanced analytics & reporting",
    ],
    cta: "Contact Us",
    popular: false,
  },
] as const;

export const PRICING_ASSISTANT = [
  {
    name: "Remote Setup",
    price: 349,
    period: "one-time",
    description: "Professional installation, anywhere in the world",
    features: [
      "Full AI assistant configuration",
      "Email & calendar integration",
      "Messaging platform setup",
      "1 hour training session",
      "7-day support window",
    ],
  },
  {
    name: "In-Person NYC",
    price: 699,
    period: "one-time",
    description: "White-glove setup at your location",
    features: [
      "Everything in Remote Setup",
      "On-site hardware configuration",
      "Network security audit",
      "Extended 2-hour training",
      "30-day support window",
    ],
  },
] as const;

export const PRICING_MAINTENANCE = {
  range: "$49–149",
  period: "/month",
  description: "Optional ongoing maintenance and updates",
} as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Quick Discovery Call",
    description: "We learn your business. Takes 30 minutes.",
  },
  {
    step: 2,
    title: "We Build Your AI",
    description: "Custom-trained on your business. Knows your services, schedule, and style.",
  },
  {
    step: 3,
    title: "Go Live in 48 Hours",
    description: "Start capturing every call and lead.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Will it sound robotic?",
    answer:
      "No. Modern AI voice technology sounds natural and conversational. Most callers won't know they're talking to an AI.",
  },
  {
    question: "What if a caller has a complex question?",
    answer:
      "Your AI handles common questions and bookings. For anything complex, it takes a detailed message and alerts you immediately so you can call back.",
  },
  {
    question: "Does it work with my scheduling software?",
    answer:
      "Yes. We integrate with Google Calendar, Housecall Pro, Jobber, ServiceTitan, and most popular scheduling tools.",
  },
  {
    question: "What about my data and privacy?",
    answer:
      "Your AI assistant runs on your hardware. Your data never touches our servers. Enterprise-grade security, professionally configured.",
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are live within 48 hours.",
  },
  {
    question: "What if I want to cancel?",
    answer: "No contracts. Month-to-month. Cancel anytime, no questions asked.",
  },
] as const;
