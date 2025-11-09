import { FloatingHearts } from "@/components/FloatingHearts";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Card } from "@/components/ui/card";
import { Bike, Heart, Cat, Home as HomeIcon, Sparkles, Moon, GraduationCap, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const timelineData = [
  {
    year: 2018,
    title: "Our First Year Together",
    description: "This first year of our relationship was beautiful and intense. We were just learning how to love and how to build a relationship that truly mattered. It was a year full of first times, of discoveries, of new emotions, and of moments.",
    icon: Heart,
    color: "rose",
    image: "/src/assets/2018.jpeg",
  },
  {
    year: 2019,
    title: "Our First Pijamada Real",
    description: "It took a long time for us to finally spend a night together — our long-awaited sleepover. Waking up next to you was one of the most beautiful feelings I’ve ever experienced, and from that moment on, I knew I never wanted to spend another night without you by my side.",
    icon: Moon,
    color: "gold",
    image: "/src/assets/2019.jpeg",
  },
  {
    year: 2020,
    title: "Pandemic Memories",
    description: "During the pandemic, we went through so much. It was a very tough year for us, yet we stayed connected through video calls, messages, and games. It wasn’t easy, but I’m so grateful that we had the strength and the will to keep going, to stay together despite everything.",
    icon: HomeIcon,
    color: "peach",
    image: "/src/assets/2020.jpeg",
  },
  {
    year: 2021,
    title: "New Baby",
    description: "That year, a new member joined our family, Miu — our baby, Smirnoff Alexei. In the middle of the storm, he was the miracle of that year. From the moment he was just a tiny little one, you became the best dad ever — full of love, patience, and tenderness.",
    icon: Cat,
    color: "rose",
    image: "/src/assets/2021.jpg",
  },
  {
    year: 2022,
    title: "Living Together",
    description: "This year, we finally moved in together. At first, we lived in a tiny apartment, but soon after, we found a new one for the four of us. That was the beginning of our home, just the two of us, with Azúcar and Alexei, against the world.",
    icon: Sparkles,
    color: "gold",
    image: "/src/assets/2022.jpg",
  },
  {
    year: 2023,
    title: "Omega",
    description: "With a lot of effort and hard work (and a little help), we saved enough to buy our motorcycle. Omega will always be our first one, the one you truly learned to ride on, the one that took us to so many places, through the cold, the heat, the rain, and so much fun.",
    icon: Bike,
    color: "peach",
    image: "/src/assets/2023.jpg",
  },
    {
    year: 2023,
    title: "My Amazing Engineer",
    description: "You graduated from EPN. I’ve always been so proud of you, but that day was truly special, watching you present, defend your thesis, and then celebrate your big day. You’re the most perfect engineer in the world: intelligent, strong, and capable of absolutely anything you set your mind to.",
    icon: GraduationCap,
    color: "rose",
    image: "/src/assets/20232.jpg",
  },
  {
    year: 2024,
    title: "New Beginnings",
    description: "New job, new city, a new beginning. It was the year we both had to start over on our own. Learning to live without you by my side was one of the hardest lessons. We had to adapt, grow, and overcome so much, but it made us stronger. We also learned to love each other even more despite the distance, and every reunion, every minute together, became even more precious.",
    icon: Plane,
    color: "rose",
    image: "/src/assets/2024.webp",
  },
  {
    year: 2025,
    title: "Today — 7 Years",
    description: "And now… seven years together, my love! Can you believe it? Seven beautiful years by your side. These years have been full of learning, growth, laughter, and love. We’ve grown so much, both as a couple and as individuals. All these years together are proof that when love is real, anything is possible.",
    icon: Sparkles,
    color: "gold",
    image: "/src/assets/2025.jpeg",
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
              Our beautiful journey together my baby
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
