import PortfolioType from "../types/PortfolioType";

// Export a list of portfolio projects
export const projects: PortfolioType[] = [
    {
      title: "Ethereum Dashboard",
      description: "Get a comprehensive view of your Ethereum Assets and Transactions. Monitor market trends, gas prices, and your asset activity in real-time.",
      tech: ["Next.js", "React.js", "Ethereum", "Crypto API", "AI SDK"],
      github: "https://github.com/CodingAbdullah/Ethereum-Wallet-Dashboard",
      demo: "https://ethereumdashboard.dev",
      featured: true
    },
    {
      title: "Software Developer Blog",
      description: "Comprehensive software developer blog that provides developers with detailed insights on the latest in the software development world.",
      tech: ["Next.js", "React.js", "MDX", "AI SDK", "Crypto"],
      github: "#",
      demo: "https://softwareblog.dev",
      featured: true
    },
    {
      title: "Medium Article Scraper",
      description: "Extract valuable content from non-paywall Medium articles effortlessly. Prepare text documents, audio files, and LLM-ready data using this free article scraper.",
      tech: ["AWS S3", "Next.js", "React.js", "Open AI TTS API", "Firecrawl API"],
      github: "https://github.com/CodingAbdullah/Medium-Article-Scraper",
      demo: "https://mediumdotcomscraper.pro",
      featured: false
    },
    {
      title: "Next.js MDX Blog Starter Kit",
      description: "Starter kit that can be used to create, edit, store, and publish blog posts using MDX, JSX components, Next.js, Supabase, and much more.",
      tech: ["Next.js", "React.js", "MDX", "Supabase", "NPM"],
      github: "https://github.com/CodingAbdullah/Next-MDX-Blog-Starter",
      demo: "https://www.npmjs.com/package/create-next-mdx-blog-app",
      featured: false
    }
];