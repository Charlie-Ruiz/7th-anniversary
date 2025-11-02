import { FloatingHearts } from "@/components/FloatingHearts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

const Celebration = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-rose-light/20 to-gold-light/30">
      <FloatingHearts />
      
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-primary animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="space-y-12 animate-fadeIn max-w-3xl">
          <div className="space-y-6">
            <Heart className="w-24 h-24 mx-auto text-primary animate-heartbeat fill-primary" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-romantic">
              Our Future
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed">
              Seven years and counting...
            </p>
            
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Thank you for being my reason to smile every single day. 💕
            </p>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Here's to the memories we've created, the adventures we've shared, 
              and the beautiful future that awaits us. Every moment with you is a gift, 
              and I can't wait to create countless more memories together.
            </p>

            <div className="pt-8">
              {!showFireworks ? (
                <Button
                  onClick={() => setShowFireworks(true)}
                  size="lg"
                  className="bg-romantic hover:opacity-90 text-white font-semibold px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  Click for a Surprise! 🎊
                </Button>
              ) : (
                <div className="space-y-6 animate-fadeIn">
                  <p className="text-3xl md:text-4xl font-serif text-romantic font-bold">
                    I Love You More Than Words Can Say! 💝
                  </p>
                  <p className="text-xl text-foreground/70">
                    Here's to forever with you, my love.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-8">
            <Link to="/">
              <Button variant="outline" size="lg" className="rounded-full">
                Start Over from the Beginning 💕
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebration;
