import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container-custom flex items-center justify-center min-h-[70vh]">
      <div className="max-w-md text-center">
        <h1 className="text-[64px] font-medium leading-none text-brand-text mb-4">404</h1>
        <h2 className="text-2xl text-brand-muted mb-4 font-medium">Page not found</h2>
        <p className="text-brand-muted mb-10 leading-relaxed">
          The topic you're looking for doesn't exist yet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-6 py-2.5 bg-transparent border border-brand-border hover:border-brand-accent text-brand-muted hover:text-brand-accent rounded-lg font-medium transition-all"
          >
            Search for it
          </Link>
          <Link 
            to="/branches" 
            className="px-6 py-2.5 bg-transparent border border-brand-border hover:border-brand-accent text-brand-muted hover:text-brand-accent rounded-lg font-medium transition-all"
          >
            Browse all topics
          </Link>
        </div>
      </div>
    </div>
  );
}
