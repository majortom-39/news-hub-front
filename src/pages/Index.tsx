import { articles } from "@/data/articles";
import NewsCard from "@/components/NewsCard";
import { Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-2.5 px-4 py-4">
          <Zap className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            News<span className="text-primary">Hub</span>
          </h1>
        </div>
      </header>

      {/* News Grid */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
