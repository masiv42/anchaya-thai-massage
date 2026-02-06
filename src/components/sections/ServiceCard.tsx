import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  name: string;
  shortDescription: string;
  popular?: boolean;
  className?: string;
}

export function ServiceCard({ id, name, shortDescription, popular, className }: ServiceCardProps) {
  return (
    <Link
      to={`/leistungen#${id}`}
      className={cn(
        "group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden",
        className
      )}
    >
      {popular && (
        <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
          Beliebt
        </span>
      )}
      
      <div className="mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <div className="w-6 h-6 rounded-full bg-primary" />
        </div>
        <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {shortDescription}
      </p>
      
      <div className="flex items-center gap-2 text-primary font-medium text-sm">
        <span>Mehr erfahren</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
