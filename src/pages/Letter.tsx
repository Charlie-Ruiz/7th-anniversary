import { FloatingHearts } from "@/components/FloatingHearts";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Mail } from "lucide-react";
import { useState } from "react";

const Letter = () => {
  const [showFullLetter, setShowFullLetter] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-peach-light/20 to-rose-light/30 pb-24">
      <FloatingHearts />

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fadeIn">
            <Mail className="w-16 h-16 mx-auto text-primary" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-romantic">
              From My Heart
            </h1>
            <p className="text-xl text-foreground/70">
              A love letter just for you
            </p>
          </div>

          <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80 border-2 shadow-2xl animate-fadeIn space-y-6">
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg font-serif">My Dearest Love,</p>

              <p className="text-base md:text-lg">
                Seven years ago, I never imagined that a simple moment could change my entire life. But then
                I met you, and everything made sense. You walked into my world and brought with you light,
                laughter, and a love I didn't know existed.
              </p>

              <p className="text-base md:text-lg">
                Every single day with you has been an amazing adventure. From our late-night conversations
                to our spontaneous road trips, from beautiful mornings with coffee to watching movies with wine.
                Each moment with you is a treasure I hold close to my heart.
              </p>

              <p className="text-base md:text-lg">
                You are the woman I love most in this entire universe. You are perfect for me,
                simply perfect. You are my perfect match. From the very first day I met you,
                I knew something was different, I felt that instant "click" the moment I saw
                you. Back then, I didn't know you were the love of my life, but I did know that what
                I felt wasn't something ordinary. My heart would race every time I saw you, every
                time we talked… and when we had our first kiss, I knew it was one of those rare things that
                just feel right in this world.
              </p>

              {showFullLetter && (
                <div className="space-y-4 animate-fadeIn">
                  <p className="text-base md:text-lg">
                    You've seen me at my best and loved me through my worst. You've been my biggest
                    cheerleader, my shoulder to cry on, and my partner in every sense of the word.
                    Your kindness, your strength, and your beautiful vibe inspire me every day.
                  </p>

                  <p className="text-base md:text-lg">
                    I am so grateful for these seven years, and I can't wait for all the years to
                    come. I want to grow with you, to build our dreams together, and to keep
                    falling in love with you over and over again (and falling in love with you, that's so easy).
                  </p>

                  <p className="text-base md:text-lg">
                    These years by your side have been nothing short of magical. Sometimes I think about how it all
                    started and how far we've come. It hasn't always been easy, we've cried, we've struggled, we've
                    fought, but through it all, there has always been love. And that love made everything worth it.
                  </p>

                  <p className="text-base md:text-lg">
                    I'm so thankful that we're together, that you chose to stay, that we both found the
                    strength and the will to keep growing, to keep learning from each other every day. Despite the
                    mistakes, we've learned so much, and I love our relationship with all my heart. It's something
                    so precious, so unique, that I want to protect it and keep it forever.
                  </p>

                  <p className="text-base md:text-lg">
                    There isn't a single day in my life when I don't want you in it. All I want with you is forever.
                    Nothing less. Every year we're amazed by how long we've been together, but the truth is, this is
                    just the beginning, my beautiful baby.
                  </p>

                  <p className="text-base md:text-lg">
                    Thank you for being you. Thank you for choosing me. Thank you for making every day brighter just
                    by being in it.
                  </p>

                  <div className="pt-4 space-y-2">
                    <p className="text-lg font-serif">Here's to us, to our past, our present, and our perfect future.</p>
                    <p className="text-lg font-serif">Forever and always,</p>
                    <p className="text-xl font-serif text-romantic">Charlie 💕</p>
                  </div>
                </div>
              )}
            </div>

            {!showFullLetter && (
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => setShowFullLetter(true)}
                  className="bg-romantic text-white rounded-full hover:opacity-90 px-8"
                >
                  Read More <Heart className="ml-2 w-4 h-4 fill-current" />
                </Button>
              </div>
            )}
          </Card>

          <div className="flex justify-center gap-4 mt-12">
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="rounded-full">
                Back to Gallery
              </Button>
            </Link>
            <Link to="/music">
              <Button size="lg" className="bg-romantic text-white rounded-full hover:opacity-90">
                Listen to Our Songs 🎵
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <GlobalNavigation />
    </div>
  );
};

export default Letter;
