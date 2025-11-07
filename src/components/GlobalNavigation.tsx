import { Link, useLocation } from "react-router-dom";
import { Home, Clock, Camera, Mail, Music, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/timeline", label: "Story", icon: Clock },
  { path: "/gallery", label: "Gallery", icon: Camera },
  { path: "/letter", label: "Letter", icon: Mail },
  { path: "/music", label: "Music", icon: Music },
  { path: "/celebration", label: "Future", icon: Sparkles },
];

export const GlobalNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="backdrop-blur-md bg-card/90 border-t-2 border-primary/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-around items-center gap-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "group flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110",
                    isActive && "bg-primary/10"
                  )}
                >
                  <div
                    className={cn(
                      "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                      isActive 
                        ? "bg-romantic shadow-lg shadow-primary/50" 
                        : "bg-primary/20 group-hover:bg-primary/30"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-colors",
                        isActive ? "text-white" : "text-primary group-hover:text-romantic"
                      )}
                    />
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-romantic rounded-full animate-heartbeat" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors",
                      isActive ? "text-romantic" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
