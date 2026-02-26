import { articles } from "@/data/articles";
import NewsCard from "@/components/NewsCard";
import { Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

const Index = () => {
  const [featured, ...rest] = articles;
  const featuredTime = formatDistanceToNow(new Date(featured.date), { addSuffix: true });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-foreground">
              News<span className="text-gradient">Hub</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            <span>Trending now</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8">
        {/* Hero / Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={`/article/${featured.id}`} className="group mb-10 block">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card glow-primary">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-80">
                  <img
                    src={featured.thumbnail}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
                    Featured Story
                  </p>
                  <h2 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {featured.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {featured.summary}
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={featured.publisherLogo} alt={featured.publisher} className="h-5 w-5 rounded-full" />
                    <span className="text-xs font-medium text-foreground">{featured.publisher}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{featuredTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Latest Stories</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* News Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 NewsHub · Curated tech news
        </p>
      </footer>
    </div>
  );
};

export default Index;
