export const site = {
  name: "Quantum",
  tagline: "AI Content writing solutions",
};

export const nav = {
  links: [
    { label: "Product", href: "#product" },
    { label: "Resources", href: "#resources" },
    { label: "Solution", href: "#solution" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "/contact" },
  ],
  login: { label: "Login", href: "/login" },
  cta: { label: "Start free trial", href: "/register" },
};

export const hero = {
  title: "Design your future with quantum AI",
  subtitle: "Never miss your idea or connection to implement",
  cta: { label: "Explore the future", href: "/register" },
};

export const superpowers = {
  title: "Give your brain superpowers",
  subtitle: [
    "Mirror the way your mind works by associating notes through AI.",
    "Quantum AI builds you a second brain.",
  ],
  paragraphGenerator: {
    title: "Paragraph generator",
    description:
      "Generate paragraphs about any topic including a keyword and in a specific tone of voice.",
    hint: "Getting low quality results? Increase the creativity or write a better description.",
  },
  craft: {
    title: "Craft together",
    description: "Create craft and work teamwide with real time collaboration.",
    people: [
      { name: "Michael", avatar: "/assets/superpowers/av-michael.jpg" },
      { name: "Eleanor", avatar: "/assets/superpowers/av-eleanor.jpg" },
      { name: "Darrell", avatar: "/assets/superpowers/av-darrell.jpg" },
      { name: "Kristin", avatar: "/assets/superpowers/av-kristin.jpg" },
      { name: "Jacob", avatar: "/assets/superpowers/av-jacob.jpg" },
    ],
  },
  iterate: {
    title: "Iterates an idea to unlock new possibilities",
    description:
      "With quantum AI for new automations sync to the cloud so everyone gets a speed boost and gain new possibilities.",
  },
};

export const voiceAI = {
  title: "Generate AI voiceovers from text",
  subtitle:
    "Focus on your getting your thoughts out and crafting the best message while Quantum does the heavy lifting for you.",
  settingsText:
    "Text to voice AI generator with 700 AI voices in 90 languages. Quickly and conveniently generate audio from text.",
  clipText:
    "Hey, there, I’m  Noor. I will be demonstrating how to do text to voice feature and edit you voice that help you",
};

export const realContent = {
  title: "Use real content on your project",
  subtitle: "Write your blog, rewrites, paragraph, summarizing, article.",
  lorem: {
    title: "Say goodbye to Lorem Ipsum",
    description:
      "Quantum Copy writes, edits, and rewrites, paragraph, summarizing, blog or article you can write with real copy. Now it’s time to say goodbye to Lorem Ipsum cause you have Quantum AI to write your content.",
  },
};

export const integrations = {
  title: "Connect Quantum to your whole stack",
  subtitle:
    "Native integrations plus API, MCP, and CLI — bring Quantum into the tools where your content already lives.",
  leftGroups: [
    {
      label: "AI agents",
      items: [
        { name: "Claude", icon: "/assets/integrations/claude.svg" },
        { name: "ChatGPT", icon: "/assets/integrations/chatgpt.svg" },
        { name: "Any MCP client", icon: "/assets/integrations/mcp.svg" },
      ],
    },
    {
      label: "Write in",
      items: [
        { name: "Google Docs", icon: "/assets/integrations/google-docs.svg" },
        { name: "Notion", icon: "/assets/integrations/notion.svg" },
        { name: "Dropbox", icon: "/assets/integrations/dropbox.svg" },
      ],
    },
  ],
  right: [
    { name: "Slack", icon: "/assets/integrations/slack.svg" },
    { name: "Gmail", icon: "/assets/integrations/gmail.svg" },
    { name: "HubSpot", icon: "/assets/integrations/hubspot.svg" },
    { name: "Google Drive", icon: "/assets/integrations/google-drive.svg" },
    { name: "LinkedIn", icon: "/assets/integrations/linkedin.svg" },
    { name: "Zapier", icon: "/assets/integrations/zapier.svg" },
  ],
  more: "+40 more integrations",
};

export const pricing = {
  title: "Pricing",
  subtitle: "Quantum AI plans & pricing are designed to meet your needs as you grow",
  cta: { label: "Start free 7-day trial", href: "/register" },
  plans: [
    {
      name: "Starter",
      tagline: "For anyone just getting started",
      price: "$29",
      features: [
        "Generate 10,000 words content",
        "20 Rewrites and Spices a day",
        "10 AI prompts a day",
        "4 Brand Voice",
        "1 user seat",
        "Cancel any time",
      ],
      disabledFeatures: [
        "Access to Prompt Library",
        "Unlimited text corrections",
        "Unlimited text recommendations",
      ],
      popular: false,
    },
    {
      name: "Pro",
      tagline: "For organizing your business & life",
      price: "$49",
      features: [
        "Generate 10,000 words content",
        "40 Rewrites and Spices a day",
        "25 AI prompts a day",
        "10 Brand Voice",
        "5 user seat",
        "Cancel any time",
        "Access to Prompt Library",
        "Unlimited text corrections",
        "Unlimited text recommendations",
      ],
      disabledFeatures: [],
      popular: true,
    },
    {
      name: "Business",
      tagline: "For collaboration across teams & tools",
      price: "$79",
      features: [
        "Generate 10,000 words content",
        "80 Rewrites and Spices a day",
        "50 AI prompts a day",
        "30 Brand Voice",
        "20 user seat",
        "Cancel any time",
        "Access to Prompt Library",
        "Unlimited text corrections",
        "Unlimited text recommendations",
      ],
      disabledFeatures: [],
      popular: false,
    },
  ],
};

export const cta = {
  title: "Get started for Free",
  subtitle: "Start for free with a 3,000 word limit for your project",
  button: { label: "Start free trial", href: "/register" },
};

export const footer = {
  tagline: "AI Content writing solutions",
  columns: [
    {
      heading: "Company",
      links: ["Product", "Resources", "Solution", "Pricing", "Contact"],
    },
    {
      heading: "Legal",
      links: ["Privacy policy", "Terms of Conditions", "Cookie Settings"],
    },
    {
      heading: "Support",
      links: ["Contact Us", "Trust, Safety & Security", "Guideline"],
    },
  ],
  newsletter: { heading: "Join our newsletter", placeholder: "Enter your email" },
  socials: [
    { label: "X", icon: "/assets/footer/social-x.svg" },
    { label: "LinkedIn", icon: "/assets/footer/social-linkedin.svg" },
    { label: "Instagram", icon: "/assets/footer/social-instagram.svg" },
  ],
  copyright: "©2023 Quantum AI Technologies, Inc.",
};

export const testimonials = {
  title: "What are people say",
  subtitle:
    "We have 1k+ positive reviews from our customers whose are loving using quantum AI.",
  cta: { label: "Read full story" },
  quotes: [
    {
      slug: "william-kerry",
      eyebrow: "User Story",
      text: "I’ve spent a great deal of time tools to get the most out of what I write, and Fraser feels like you’re using content marketing cheat codes.",
      name: "William Kerry",
      role: "Cofounder, Ofspace",
      photo: "/assets/testimonials/portrait.png",
      story: [
        "Before Quantum, our content calendar was more aspiration than plan. As a cofounder I was writing landing pages between investor calls, and every draft took two or three sittings before it felt shippable.",
        "The change wasn’t that the AI wrote for me — it removed the blank-page tax. I start with a rough brief, get back something eighty percent of the way there, and spend my time sharpening the argument instead of hunting for the first sentence.",
        "Six months in, Ofspace publishes three times the volume we used to, and our own voice is louder in it, not quieter. It genuinely feels like using content marketing cheat codes.",
      ],
    },
    {
      slug: "amara-osei",
      eyebrow: "User Story",
      text: "Our blog was a weekly scramble, and now it’s a same-day publish where every draft lands close enough that editing it feels like a genuine treat.",
      name: "Amara Osei",
      role: "Head of Content, Northwind",
      photo: "/assets/testimonials/amara.png",
      story: [
        "I run a team of four writers and a backlog that never stopped growing. Our blog was supposed to ship weekly and in practice it slipped most weeks, usually because a single post got stuck in edits.",
        "Now the first draft is done by the time the brief is written. My writers open something that already has structure, sources and a working headline, and they spend their hours making it sharp rather than making it exist.",
        "We moved from weekly to same-day publishing without adding headcount. The quality bar went up, not down — when editing is a pleasure instead of a rescue, people actually push the piece further.",
      ],
    },
    {
      slug: "diego-marchetti",
      eyebrow: "User Story",
      text: "Forty product descriptions in one afternoon, and each still sounded like our brand — the backlog the whole team dreaded finally cleared.",
      name: "Diego Marchetti",
      role: "Marketing Lead, Peppergrove",
      photo: "/assets/testimonials/diego.png",
      story: [
        "Peppergrove has a catalogue of a few hundred products and every one needs a description that sounds like us and not like a spec sheet. That work used to sit at the bottom of every sprint.",
        "We trained Quantum on twenty of our best existing descriptions, then ran the rest through it in batches. Forty came back in a single afternoon, and the edits were tone, not rewrites.",
        "The backlog that had haunted the team for a year cleared in a week. The new pages convert as well as the ones we agonised over, which settled a long argument about whether AI copy could carry our brand.",
      ],
    },
    {
      slug: "priya-raman",
      eyebrow: "User Story",
      text: "I set the brand voice once, and every teammate now writes on tone without my line edits, which hands me back real hours every week.",
      name: "Priya Raman",
      role: "Founder, Studio Kite",
      photo: "/assets/testimonials/priya.png",
      story: [
        "Studio Kite is small and everyone writes — proposals, case studies, social, client updates. Keeping all of that on one voice used to mean I read and lightly rewrote almost everything that went out.",
        "I sat down once and defined our brand voice properly inside Quantum: the words we use, the ones we avoid, the rhythm. Now every teammate drafts against that same setting.",
        "The line edits I used to do have mostly disappeared. That’s a few hours back every week, and a better feeling for the team — they’re trusted to ship, and the writing still sounds like one studio.",
      ],
    },
  ],
};
