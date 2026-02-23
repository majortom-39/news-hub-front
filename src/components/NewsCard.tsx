import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import type { Article } from "@/data/articles";

const NewsCard = ({ article }: { article: Article }) => {
  const timeAgo = formatDistanceToNow(new Date(article.date), { addSuffix: true });

  return (
    <Link to={`/article/${article.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="mb-2 text-base font-semibold leading-snug text-[hsl(var(--foreground))] line-clamp-2 group-hover:text-emerald-400 transition-colors">
            {article.title}
          </h3>
          <p className="mb-3 text-sm text-[hsl(var(--muted-foreground))] line-clamp-1">
            {article.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-2">
            <img src={article.publisherLogo} alt={article.publisher} className="h-5 w-5 rounded-full" />
            <span className="text-xs text-[hsl(var(--muted-foreground))]">{article.publisher}</span>
            <span className="text-xs text-[hsl(var(--muted-foreground))]">•</span>
            <span className="text-xs text-[hsl(var(--muted-foreground))]">{article.author}</span>
            <span className="ml-auto text-xs text-[hsl(var(--muted-foreground))]">{timeAgo}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
