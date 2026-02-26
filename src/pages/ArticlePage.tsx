import { useParams, Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { articles } from "@/data/articles";
import ChatBot from "@/components/ChatBot";
import { motion } from "framer-motion";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Article not found.</p>
      </div>
    );
  }

  const timeAgo = formatDistanceToNow(new Date(article.date), { addSuffix: true });
  const paragraphs = article.fullSummary.split("\n\n");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </header>

      <motion.main
        className="mx-auto max-w-3xl px-5 py-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Thumbnail */}
        <div className="relative mb-8 overflow-hidden rounded-2xl">
          <img src={article.thumbnail} alt={article.title} className="h-64 w-full object-cover sm:h-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="mb-8 flex items-center gap-3 border-b border-border/60 pb-6">
          <img src={article.publisherLogo} alt={article.publisher} className="h-8 w-8 rounded-full" />
          <div>
            <p className="text-sm font-medium text-foreground">{article.publisher}</p>
            <p className="text-xs text-muted-foreground">
              By {article.author} · {timeAgo}
            </p>
          </div>
        </div>

        {/* Summary paragraphs */}
        <div className="mb-10 space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        {/* Read full article link */}
        <a
          href={article.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 hover:brightness-110"
        >
          Read Full Article
          <ExternalLink size={15} />
        </a>
      </motion.main>

      <ChatBot articleTitle={article.title} />
    </div>
  );
};

export default ArticlePage;
