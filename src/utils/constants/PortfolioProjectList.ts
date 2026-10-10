import PortfolioType from "../types/PortfolioType";

// Portfolio projects, listed newest/most important first
export const projects: PortfolioType[] = [
    {
      title: "Ethereum Dashboard",
      description: "Real-time view of Ethereum wallets and markets: ENS lookups, prices, gas, transactions, and ERC-20/721 contract lookups, with dashboards for Polygon, Arbitrum, and Optimism. Data from Alchemy, CoinGecko, Etherscan, and Moralis.",
      tech: ["Next.js", "React.js", "Ethereum", "Crypto API", "AI SDK"],
      github: "https://github.com/CodingAbdullah/Ethereum-Wallet-Dashboard",
      demo: "https://ethereumdashboard.dev"
    },
    {
      title: "Software Developer Blog",
      description: "Developer blog covering the latest in software engineering, authored in MDX with AI-assisted features.",
      tech: ["Next.js", "React.js", "MDX", "AI SDK"],
      demo: "https://softwareblog.dev"
    },
    {
      title: "Medium Article Scraper",
      description: "Extracts content from non-paywalled Medium articles into text, audio, and LLM-ready data, using Firecrawl for extraction and text-to-speech for audio output.",
      tech: ["Next.js", "React.js", "AWS S3", "Firecrawl API", "OpenAI TTS API"],
      demo: "https://mediumdotcomscraper.pro"
    },
    {
      title: "Next.js MDX Blog Starter Kit",
      description: "Published npm starter kit for creating, editing, storing, and publishing MDX blog posts with JSX components, backed by Supabase.",
      tech: ["Next.js", "React.js", "MDX", "Supabase", "npm"],
      github: "https://github.com/CodingAbdullah/Next-MDX-Blog-Starter",
      demo: "https://www.npmjs.com/package/create-next-mdx-blog-app"
    }
];
