import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import type { Article } from "@/data/articles";

const NewsCard = ({ article }: { article: Article }) => {
  const timeAgo = formatDistanceToNow(new Date(article.date), { addSuffix: true });

  return (
    <Link to={`/article/${article.id}`} className="group block">
      <div className="card-shine overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
        {/* Thumbnail */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="mb-2 text-[15px] font-semibold leading-snug text-card-foreground line-clamp-2 transition-colors group-hover:text-primary">
            {article.title}
          </h3>
          <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {article.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-2">
            <img src={article.publisherLogo} alt={article.publisher} className="h-4 w-4 rounded-full" />
            <span className="text-[11px] font-medium text-muted-foreground">{article.publisher}</span>
            <span className="text-[11px] text-border">·</span>
            <span className="text-[11px] text-muted-foreground">{timeAgo}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
