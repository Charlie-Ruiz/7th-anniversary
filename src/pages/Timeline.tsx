import { FloatingHearts } from "@/components/FloatingHearts";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, MapPin, Plane, Home as HomeIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const timelineData = [
  {
    year: 2018,
    title: "Our First Date",
    description: "The day our story began. Coffee turned into hours of conversation, and I knew you were special.",
    icon: Heart,
    color: "rose",
    image: "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?w=800&auto=format&fit=crop&q=60",
  },
  {
    year: 2019,
    title: "Our First Trip Together",
    description: "Adventures in new places, making memories that would last forever. Every moment with you felt like magic.",
    icon: Plane,
    color: "gold",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60",
  },
  {
    year: 2020,
    title: "Pandemic Memories",
    description: "We grew closer even when the world felt distant. Home became our favorite place because you were there.",
    icon: HomeIcon,
    color: "peach",
    image: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=800&auto=format&fit=crop&q=60",
  },
  {
    year: 2021,
    title: "New Adventures",
    description: "Exploring life together, hand in hand. Every challenge we faced made us stronger.",
    icon: MapPin,
    color: "rose",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60",
  },
  {
    year: 2022,
    title: "Growing Together",
    description: "Building our dreams, supporting each other, and falling more in love every day.",
    icon: Sparkles,
    color: "gold",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60",
  },
  {
    year: 2023,
    title: "Unforgettable Moments",
    description: "More adventures, more laughter, more reasons to be grateful for you in my life.",
    icon: Calendar,
    color: "peach",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",
  },
  {
    year: 2024,
    title: "Still Going Strong",
    description: "Every day with you is a gift. Our love continues to bloom and grow.",
    icon: Heart,
    color: "rose",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60",
  },
  {
    year: 2025,
    title: "Today — 7 Years",
    description: "Celebrating seven incredible years together. Here's to forever with you, my love.",
    icon: Sparkles,
    color: "gold",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=60",
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-peach-light/20 to-gold-light/30 pb-24">
      <FloatingHearts />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-romantic">
              Our Story
            </h1>
            <p className="text-xl text-foreground/70">
              A timeline of our beautiful journey together
            </p>
          </div>

          <div className="space-y-8">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.year}
                  className="relative p-6 md:p-8 backdrop-blur-sm bg-card/80 border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fadeIn overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden group">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-3xl font-serif font-bold text-primary">
                          {item.year}
                        </h3>
                        <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 mt-16">
            <Link to="/">
              <Button variant="outline" size="lg" className="rounded-full">
                Back to Home
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" className="bg-romantic text-white rounded-full hover:opacity-90">
                View Our Memories 📸
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <GlobalNavigation />
    </div>
  );
};

export default Timeline;
