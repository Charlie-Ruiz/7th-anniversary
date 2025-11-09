import { Button } from "@/components/ui/button";
import { FloatingHearts } from "@/components/FloatingHearts";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Heart, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

// 🎵 Importa tu canción desde assets
import loveSong from "@/assets/Manuel Medrano - La Distancia (Letra).mp3";

const Home = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-rose-light/20 to-peach-light/30 pb-24">
      {/* Corazones flotantes */}
      <FloatingHearts />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="space-y-12 animate-fadeIn">
          {/* Encabezado */}
          <div className="space-y-6">
            <Heart className="w-20 h-20 mx-auto text-primary animate-heartbeat fill-primary" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-romantic">
              Happy anniversary my love!
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-foreground/80">
              7 years of adventures together 💞
            </p>
          </div>

          {/* Texto e interacción */}
          <div className="space-y-12 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Since that November 9th, seven years ago, I haven’t stopped loving
              you for even a second. These years have been filled with love,
              laughter, tears, adventures, surprises, disagreements, anger,
              kisses, and reunions. And I wouldn’t change a single thing, because
              every moment has led us to this beautiful relationship we share
              today.
            </p>

            {/* Botón para ir al timeline */}
            <Link to="/timeline">
              <Button
                size="lg"
                className="mt-6 bg-romantic hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Begin Our Journey 💕
              </Button>
            </Link>

            {/* Botón de música */}
            <button
              onClick={toggleMusic}
              className="flex items-center gap-2 mx-auto text-muted-foreground hover:text-primary transition-colors"
            >
              <Music
                className={`w-5 h-5 ${musicPlaying ? "animate-pulse" : ""}`}
              />
              <span>{musicPlaying ? "Music Playing" : "Play Our Song"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navegación global */}
      <GlobalNavigation />

      {/* Audio con referencia correcta */}
      <audio ref={audioRef} src={loveSong} loop />
    </div>
  );
};

export default Home;
