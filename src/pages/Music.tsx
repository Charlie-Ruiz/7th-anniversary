import { FloatingHearts } from "@/components/FloatingHearts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music as MusicIcon, Play } from "lucide-react";

const Music = () => {
  const songs = [
    { title: "Our First Dance", note: "The song that started it all 💃", year: "2018" },
    { title: "Road Trip Anthem", note: "Singing at the top of our lungs 🚗", year: "2019" },
    { title: "Rainy Day Song", note: "Cozy moments together ☔", year: "2020" },
    { title: "Happy Song", note: "Makes us smile every time 😊", year: "2021" },
    { title: "Dance Kitchen Song", note: "Our cooking playlist essential 🍳", year: "2022" },
    { title: "Love Ballad", note: "When words aren't enough 💝", year: "2023" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-gold-light/20 to-peach-light/30">
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
                className="p-6 backdrop-blur-sm bg-card/80 border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fadeIn group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-romantic flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white" />
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

          <Card className="p-8 backdrop-blur-sm bg-card/80 border-2 text-center space-y-4 mb-12">
            <p className="text-lg text-foreground/70">
              🎵 Add your Spotify playlist link here to play our favorite songs together 🎵
            </p>
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MusicIcon className="w-16 h-16 mx-auto text-primary/50" />
                <p className="text-muted-foreground">Spotify Player Embed</p>
              </div>
            </div>
          </Card>

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
    </div>
  );
};

export default Music;
