import { FloatingHearts } from "@/components/FloatingHearts";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

// Importamos las imágenes como módulos (Vite las procesa correctamente)
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.webp";

const Gallery = () => {
  const memories = [
    { id: 1, caption: "Our first reunion 💞", note: "The very first time we saw each other after you left", image: img1 },
    { id: 2, caption: "Frida Kooowhlo 🎨", note: "Frida Kooowhlo will never go out of style", image: img2 },
    { id: 3, caption: "Baby Shark 🦈", note: "You came to see me skate like Baby Shark and cheered for me so hard!", image: img3 },
    { id: 4, caption: "Blood donation ❤️", note: "How could I ever say you don't love me after what you did for me that day?", image: img4 },
    { id: 5, caption: "Iconic photo 📸", note: "Our little shared hobbies captured forever", image: img5 },
    { id: 6, caption: "Baby photo 👶🏳️‍🌈", note: "We were so tiny… and already so gay", image: img6 },
    { id: 7, caption: "Our first trip together ✈️", note: "The best damn trip ever — Panama will always have our hearts", image: img7 },
    { id: 8, caption: "First holidays together 🎄", note: "The best Christmas and New Year I've ever had in my life", image: img8 },
    { id: 9, caption: "Our babies 🐾", note: "Our little creatures, the sweetest siblings ever", image: img9 },
    { id: 10, caption: "Sumak 💋", note: "That anniversary was magical — just us, making love, eating, and sleeping", image: img10 },
    { id: 11, caption: "Our gay family 🌈", note: "Forever our beautiful little Miu gay family", image: img11 },
    { id: 12, caption: "Home date 🕯️", note: "Our improvised dates at home are always the best in the world", image: img12 },
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
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
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
