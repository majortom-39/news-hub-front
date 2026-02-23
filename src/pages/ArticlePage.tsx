import { useParams, Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { articles } from "@/data/articles";
import ChatBot from "@/components/ChatBot";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[hsl(var(--background))]">
        <p className="text-[hsl(var(--muted-foreground))]">Article not found.</p>
      </div>
    );
  }

  const timeAgo = formatDistanceToNow(new Date(article.date), { addSuffix: true });
  const paragraphs = article.fullSummary.split("\n\n");

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors">
            <ArrowLeft size={16} />
            Back to News
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Thumbnail */}
        <div className="relative mb-6 overflow-hidden rounded-xl">
          <img src={article.thumbnail} alt={article.title} className="h-72 w-full object-cover sm:h-96" />
          <span className="absolute left-4 top-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold leading-tight text-[hsl(var(--foreground))] sm:text-3xl">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="mb-8 flex items-center gap-3 border-b border-[hsl(var(--border))] pb-6">
          <img src={article.publisherLogo} alt={article.publisher} className="h-8 w-8 rounded-full" />
          <div>
            <p className="text-sm font-medium text-[hsl(var(--foreground))]">{article.publisher}</p>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              By {article.author} · {timeAgo}
            </p>
          </div>
        </div>

        {/* Summary paragraphs */}
        <div className="mb-8 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
              {p}
            </p>
          ))}
        </div>

        {/* Read full article link */}
        <a
          href={article.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          Read Full Article
          <ExternalLink size={16} />
        </a>
      </main>

      <ChatBot articleTitle={article.title} />
    </div>
  );
};

export default ArticlePage;
