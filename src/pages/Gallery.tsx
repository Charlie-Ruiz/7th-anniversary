import { FloatingHearts } from "@/components/FloatingHearts";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const Gallery = () => {
  const memories = [
    { id: 1, caption: "Our first adventure together 🌟", note: "Best day ever!" },
    { id: 2, caption: "Sunset moments 🌅", note: "Beautiful like you" },
    { id: 3, caption: "Laughing until we cried 😂", note: "You make everything fun" },
    { id: 4, caption: "Cozy nights in 🏡", note: "Home is wherever you are" },
    { id: 5, caption: "Dancing in the rain 💃", note: "Spontaneous and perfect" },
    { id: 6, caption: "Beach days ☀️", note: "Sun, sand, and you" },
    { id: 7, caption: "Road trip memories 🚗", note: "Best travel partner" },
    { id: 8, caption: "Coffee mornings ☕", note: "Starting the day right" },
    { id: 9, caption: "Date nights 🍷", note: "Forever my favorite person" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-rose-light/20 to-gold-light/30 pb-24">
      <FloatingHearts />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fadeIn">
            <Camera className="w-16 h-16 mx-auto text-primary" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-romantic">
              Our Moments
            </h1>
            <p className="text-xl text-foreground/70">
              Every picture tells a story of our love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {memories.map((memory, index) => (
              <Card
                key={memory.id}
                className="group relative overflow-hidden backdrop-blur-sm bg-card/80 border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeIn cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <Camera className="w-16 h-16 text-primary/30" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-semibold text-lg">{memory.caption}</p>
                      <p className="text-sm text-white/80 italic">{memory.note}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground italic">
              💝 Click on any photo to add your own special memories 💝
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/timeline">
                <Button variant="outline" size="lg" className="rounded-full">
                  Back to Timeline
                </Button>
              </Link>
              <Link to="/letter">
                <Button size="lg" className="bg-romantic text-white rounded-full hover:opacity-90">
                  Read My Letter 💌
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <GlobalNavigation />
    </div>
  );
};

export default Gallery;
