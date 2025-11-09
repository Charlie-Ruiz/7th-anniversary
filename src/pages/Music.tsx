import { FloatingHearts } from "@/components/FloatingHearts";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music as MusicIcon, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const Music = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (index: number, audioSrc: string) => {
    if (playingIndex === index) {
      // Pause if the same song is clicked
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      // Stop current song if any
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // Play new song
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      setPlayingIndex(index);
    }
  };

  const songs = [
    { title: "Acordando o predio", note: "Our song in portuguese jusjusjus", year: "2019", audio: "./src/assets/Acordando.mp3" },
    { title: "Coqueta", note: "The new favorite one and in this version 🎵", year: "2025", audio: "./src/assets/Coqueta.mp3" },
    { title: "El Merengue", note: "The one that makes me cry :(", year: "2024", audio: "./src/assets/Merengue.mp3" },
    { title: "Mine", note: "You will always be mine ❤️", year: "2020", audio: "./src/assets/Mine.mp3" },
    { title: "Nenita", note: "I am your nenita 🌟", year: "2025", audio: "./src/assets/Nenita.mp3" },
    { title: "Too Sweet", note: "Your favorite one that I don't like haha", year: "2025", audio: "./src/assets/Too sweet.mp3" },
    { title: "Under the influence", note: "Our jusjusjus song for doing jusjusjus things 🔥", year: "2024", audio: "./src/assets/Under.mp3" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-gold-light/20 to-peach-light/30 pb-24">
      <FloatingHearts />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fadeIn">
            <MusicIcon className="w-16 h-16 mx-auto text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-romantic">
              Our Songs
            </h1>
            <p className="text-xl text-foreground/70">
              The soundtrack to our love story
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {songs.map((song, index) => (
              <Card
                key={index}
                onClick={() => handlePlay(index, song.audio)}
                className="p-6 backdrop-blur-sm bg-card/80 border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fadeIn group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-romantic flex items-center justify-center group-hover:scale-110 transition-transform">
                    {playingIndex === index ? (
                      <Pause className="w-6 h-6 text-white fill-white animate-pulse" />
                    ) : (
                      <Play className="w-6 h-6 text-white fill-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">{song.note}</p>
                  </div>

                  <div className="text-sm font-semibold text-primary">
                    {song.year}
                  </div>
                </div>
              </Card>
            ))}
          </div>


          <div className="flex justify-center gap-4">
            <Link to="/letter">
              <Button variant="outline" size="lg" className="rounded-full">
                Back to Letter
              </Button>
            </Link>
            <Link to="/celebration">
              <Button size="lg" className="bg-romantic text-white rounded-full hover:opacity-90">
                Final Celebration 🎉
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <GlobalNavigation />
    </div>
  );
};

export default Music;
