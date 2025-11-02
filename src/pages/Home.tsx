import { Button } from "@/components/ui/button";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Heart, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    // Here you would integrate actual music playback
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-rose-light/20 to-peach-light/30">
      <FloatingHearts />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="space-y-8 animate-fadeIn">
          <div className="space-y-4">
            <Heart className="w-20 h-20 mx-auto text-primary animate-heartbeat fill-primary" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-romantic">
              Our Beginning
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-foreground/80">
              7 years of adventures together 💞
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              From that magical first moment to today, every second with you has been a treasure.
              This journey through our memories is a celebration of us — our laughter, our dreams,
              and the love that keeps growing stronger.
            </p>

            <Link to="/timeline">
              <Button 
                size="lg" 
                className="bg-romantic hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Begin Our Journey 💕
              </Button>
            </Link>

            <button
              onClick={toggleMusic}
              className="flex items-center gap-2 mx-auto text-muted-foreground hover:text-primary transition-colors"
            >
              <Music className={`w-5 h-5 ${musicPlaying ? 'animate-pulse' : ''}`} />
              <span>{musicPlaying ? 'Music Playing' : 'Play Our Song'}</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <p className="text-sm text-muted-foreground">Scroll down to explore</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
