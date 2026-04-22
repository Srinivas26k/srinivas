// PLACEHOLDER — replace with real blog posts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-post",
    title: "Why Editorial Design Wins in the Age of AI",
    excerpt: "As AI-generated content floods the web, the studios that survive will be those who doubled down on craft, restraint, and editorial authority.",
    category: "Design Thinking",
    date: "2026-04-10",
    readTime: "5 min read",
    image: "/images/blog_1.jpg",
    content: `Editorial design is not nostalgia. It is signal in a world of noise.\n\nWhen every landing page looks the same — gradient mesh, Inter font, three-column grid — the studio that reaches for Instrument Serif and a 180px display headline becomes the outlier. Outliers get remembered.\n\nThe VOIR approach is instructive: zero lime-green CTAs, no gradient noise, no animated gradient borders. Just ink, cream, and a single warm taupe accent. The restraint is the statement.\n\n## Craft as Competitive Advantage\n\nAI can generate a wireframe in seconds. It cannot replicate the editorial instinct that says *this headline needs to be 20% bigger*, or *this image works better in grayscale*. That instinct is built over years of looking at good work.\n\nThe studios winning in 2026 are the ones who treat every pixel as a publishing decision.\n\n## The Metric That Matters\n\nConversion is a lagging indicator. Brand authority is leading. When a prospect lands on your portfolio and immediately knows what you stand for, the sales cycle collapses.\n\nBuild for authority first. Everything else follows.`
  },
  {
    slug: "gsap-scroll-patterns",
    title: "GSAP ScrollTrigger Patterns That Actually Work",
    excerpt: "Five animation patterns — letter stagger, cover wipe, parallax, word blur, count-up — implemented cleanly with ScrollTrigger and zero layout shift.",
    category: "Motion Design",
    date: "2026-03-28",
    readTime: "8 min read",
    image: "/images/blog_2.jpg"
  },
  {
    slug: "designing-ai-interfaces",
    title: "Designing Interfaces for Probabilistic Systems",
    excerpt: "AI outputs are never certain. Here is how to design UI that communicates confidence, uncertainty, and iteration without confusing the user.",
    category: "AI Design",
    date: "2026-03-15",
    readTime: "6 min read",
    image: "/images/blog_3.jpg"
  }
];
