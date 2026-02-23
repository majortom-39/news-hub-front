import { articles } from "@/data/articles";
import NewsCard from "@/components/NewsCard";
import { Newspaper } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
          <Newspaper className="h-7 w-7 text-emerald-500" />
          <h1 className="text-xl font-bold text-[hsl(var(--foreground))]">
            Pulse<span className="text-emerald-500">Feed</span>
          </h1>
        </div>
      </header>

      {/* News Grid */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
