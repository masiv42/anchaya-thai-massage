import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { businessInfo } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 md:hidden transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      {/* Expanded Menu */}
      <div
        className={cn(
          "absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300",
          isExpanded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <a
          href={businessInfo.phoneLink}
          className="flex items-center gap-3 bg-background shadow-elevated rounded-full pl-4 pr-5 py-3 hover:scale-105 transition-transform"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-medium text-sm">Anrufen</span>
        </a>
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-background shadow-elevated rounded-full pl-4 pr-5 py-3 hover:scale-105 transition-transform"
        >
          <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium text-sm">WhatsApp</span>
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-14 h-14 rounded-full shadow-elevated flex items-center justify-center transition-all duration-300",
          isExpanded
            ? "bg-muted text-foreground rotate-0"
            : "bg-primary text-primary-foreground"
        )}
        aria-label={isExpanded ? "Menü schließen" : "Kontakt"}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
