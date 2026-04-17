
export interface Option {
  id: string;
  label: string;
  emoji: string;
}

export interface Question {
  id: string;
  question: string;
  subtitle?: string;
  type?: 'contact' | 'selection';
  options?: Option[];
  optionsByType?: Record<string, Option[]>;
  skipForTypes?: string[];
}

export interface QualifierFlow {
  questions: Question[];
  uspScripts: Record<string, string>;
  routing: Record<string, { action: string; message: string; target?: string }>;
}

export const QUALIFIER_FLOW: QualifierFlow = {
  questions: [
    {
      id: "q1",
      question: "Hey! What brings you to Octoways today? 🐙",
      subtitle: "Let me personalise your experience",
      options: [
        { id: "client",    label: "I have a project — I'm a potential client",     emoji: "💼" },
        { id: "jobseeker", label: "I'm looking for a job or internship",            emoji: "🎯" },
        { id: "partner",   label: "I'm a developer / partner for collaboration",    emoji: "🤝" },
        { id: "explorer",  label: "Just exploring — curious about AI",              emoji: "🔭" },
        { id: "student",   label: "I'm a student researching AI companies",         emoji: "🎓" }
      ]
    },
    {
      id: "q2",
      question: "What's your main goal from this visit?",
      subtitle: "I'll show you exactly what you need",
      optionsByType: {
        client: [
          { id: "quote",    label: "Get a quote for my project",     emoji: "💰" },
          { id: "services", label: "Understand your AI services",     emoji: "🧠" },
          { id: "works",    label: "See your past work & portfolio",  emoji: "✨" },
          { id: "book",     label: "Book a consultation call",        emoji: "📅" }
        ],
        jobseeker: [
          { id: "roles",    label: "See open roles",                  emoji: "📋" },
          { id: "culture",  label: "Understand company culture",      emoji: "🌍" },
          { id: "portfolio",label: "Submit my portfolio",             emoji: "🎨" },
          { id: "process",  label: "Learn about the interview process",emoji: "🗺️" }
        ],
        partner: [
          { id: "api",       label: "Explore API integrations",        emoji: "⚡" },
          { id: "whitelabel",label: "Discuss white-label AI",          emoji: "🏷️" },
          { id: "collab",    label: "Technical collaboration",         emoji: "🔗" }
        ],
        explorer: [
          { id: "learn",    label: "Learn what AI can do for my industry", emoji: "🌱" },
          { id: "gen",      label: "Understand generative AI",         emoji: "🎨" },
          { id: "possible", label: "See what is possible with AI",    emoji: "🚀" }
        ],
        student: [
          { id: "research",   label: "Company research",               emoji: "📚" },
          { id: "internship", label: "Internship opportunities",       emoji: "🎯" },
          { id: "tech",       label: "Learn about your tech stack",    emoji: "💻" }
        ]
      }
    },
    {
      id: "q3",
      question: "What kind of AI solution are you most interested in?",
      subtitle: "This helps me match you to the right team",
      skipForTypes: ["explorer", "student"],
      optionsByType: {
        client: [
          { id: "llm",    label: "Custom AI / LLM for my business",  emoji: "🧠" },
          { id: "app",    label: "AI-powered web or mobile app",      emoji: "📱" },
          { id: "auto",   label: "Business process automation",       emoji: "⚙️" },
          { id: "media",  label: "Generative media — images, video",  emoji: "🎬" },
          { id: "data",   label: "Data analytics & predictive AI",    emoji: "📊" },
          { id: "unsure", label: "Not sure yet — I need guidance",    emoji: "🤔" }
        ],
        jobseeker: [
          { id: "eng",      label: "AI / Machine Learning Engineering", emoji: "🤖" },
          { id: "fullstack",label: "Full-Stack Development",            emoji: "💻" },
          { id: "design",   label: "UI/UX and Product Design",          emoji: "🎨" },
          { id: "devops",   label: "DevOps and Cloud Infrastructure",   emoji: "☁️" },
          { id: "biz",      label: "Business Development / Sales",      emoji: "📈" },
          { id: "marketing",label: "Marketing and Content",             emoji: "📣" }
        ],
        partner: [
          { id: "inference",label: "AI inference / model hosting",      emoji: "⚡" },
          { id: "data2",    label: "Data pipeline & ETL",               emoji: "🔄" },
          { id: "custom",   label: "Custom model fine-tuning",          emoji: "🔬" }
        ]
      }
    },
    {
      id: "q4",
      question: "What matters most to you right now?",
      subtitle: "Be honest — this helps me give you the best path forward",
      optionsByType: {
        client: [
          { id: "speed",      label: "Speed — I need this built fast",            emoji: "⚡" },
          { id: "quality",    label: "Quality — I want the very best",            emoji: "🏆" },
          { id: "budget",     label: "Budget — cost-effective solutions",         emoji: "💡" },
          { id: "innovation", label: "Innovation — something never built before", emoji: "🚀" }
        ],
        jobseeker: [
          { id: "culture2",    label: "Finding the right culture fit",            emoji: "🌍" },
          { id: "growth",      label: "Learning and growth opportunities",        emoji: "📈" },
          { id: "salary",      label: "Competitive salary and benefits",          emoji: "💰" },
          { id: "cuttingedge", label: "Working on cutting-edge AI",               emoji: "🤖" }
        ],
        partner: [
          { id: "reliability",label: "Reliability and uptime",                emoji: "🛡️" },
          { id: "speed2",     label: "Speed of integration",                   emoji: "⚡" },
          { id: "scale",      label: "Scalability",                            emoji: "📊" }
        ],
        explorer: [
          { id: "understanding",label: "Understanding AI basics",              emoji: "🧠" },
          { id: "usecases",    label: "Finding AI use cases for my field",     emoji: "💡" },
          { id: "connect",     label: "Connecting with AI experts",            emoji: "🤝" }
        ],
        student: [
          { id: "knowledge",     label: "Technical knowledge",                 emoji: "📚" },
          { id: "network",       label: "Professional networking",             emoji: "🌐" },
          { id: "opportunities", label: "Job opportunities",                   emoji: "🎯" }
        ]
      }
    },
    {
      id: "q5",
      question: "Almost done! How can we follow up with you?",
      subtitle: "Just your name and one contact — no spam, ever",
      type: "contact"
    }
  ],

  uspScripts: {
    "client-speed":         "With our Neural V4.0 engine running at 14ms latency and a team that has shipped 1,200+ AI solutions, we move faster than any agency. Let's get your first prototype in 2 weeks. ⚡",
    "client-quality":       "45+ patented AI models. 12+ years of neural architecture. We build everything from scratch — no off-the-shelf shortcuts. Your solution will be one of a kind. 🏆",
    "client-budget":        "Kathmandu-based, globally delivered. Silicon Valley quality at a fraction of the cost. 30+ countries trust us for exactly this reason. 💡",
    "client-innovation":    "We hold 45+ AI patents. If it doesn't exist yet, we're the ones who will build it first. Tell me your wildest idea — let's make it real. 🚀",
    "jobseeker-growth":     "Octoways is building the tools the industry will use in 5 years. Work on real neural architecture, not just API wrappers. Your career accelerates here. 📈",
    "jobseeker-cuttingedge":"45+ AI patents, Neural V4.0, generative engines built in-house. This is as cutting-edge as it gets. Come build the future with us. 🤖",
    "jobseeker-culture2":   "Remote-first, global team, flat hierarchy. Every person here has direct impact on AI products used by thousands. Culture isn't a perk — it's how we work. 🌍",
    "jobseeker-salary":     "Competitive packages benchmarked globally, plus the equity of working on AI that matters. Let's talk numbers after we meet. 💰",
    "partner-default":      "Our APIs are battle-tested across 1,200+ deployments. 14ms average latency, 99.9% uptime SLA, full white-label options. Let's integrate. 🔗",
    "explorer-default":     "AI isn't just for tech companies. We've applied it to healthcare, finance, education, retail, and more. Let me show you what's possible for YOUR industry. 🌱",
    "student-default":      "We love curious minds! We run internships, mentorships, and have open-sourced several tools. Your learning journey starts here. 🎓"
  },

  routing: {
    "client-book":       { action: "calendly",  message: "Let me open our booking calendar for you!" },
    "client-services":   { action: "scroll",    target: "#section-services", message: "Let me show you our services!" },
    "client-quote":      { action: "calendly",  message: "Let's get you a quote — booking a call is the fastest way!" },
    "client-works":      { action: "navigate",  target: "/works", message: "Check out 1,200+ projects we've delivered!" },
    "client-unsure":     { action: "consult",   message: "Let me give you a quick AI consultation..." },
    "jobseeker-default": { action: "email",     message: "I'll open an application email for you right now!" },
    "partner-default":   { action: "scroll",    target: "#section-cta", message: "Let's get you connected with our partnerships team!" },
    "explorer-default":  { action: "tour",      message: "Let me give you the full tour! 🐙" },
    "student-default":   { action: "navigate",  target: "/about", message: "Let me show you who we are!" }
  }
};
