import { useState, useEffect } from 'react';

function App() {
  const [openLetter, setOpenLetter] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number }[]>([]);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  const memories = [
    {
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400&h=400",
      caption: "The day we met at the coffee shop ☕"
    },
    {
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=400&h=400",
      caption: "Our first trip together ✈️"
    },
    {
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=400&h=400",
      caption: "Sunset walks by the beach 🌅"
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400&h=400",
      caption: "Movie nights and popcorn 🍿"
    },
    {
      image: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80&w=400&h=400",
      caption: "Your birthday surprise 🎂"
    },
    {
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=400&h=400",
      caption: "Every moment with you 💖"
    }
  ];

  const reasons = [
    "Your smile that lights up the room",
    "The way you laugh at my bad jokes",
    "Your kindness to everyone around you",
    "How you always know what to say",
    "Your beautiful heart",
    "The way you see the good in everything"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-300 animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 animate-pulse">
          <span className="text-8xl">💌</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-4 tracking-tight">
          To My Love
        </h1>
        <p className="text-xl md:text-2xl text-rose-400 mb-8 max-w-2xl">
          Some feelings are too big for words... so I made this for you
        </p>
        <button
          onClick={() => setOpenLetter(true)}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Open My Letter ✨
        </button>
      </section>

      {/* Letter Modal */}
      {openLetter && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
            <div className="p-8">
              <div className="text-center mb-6">
                <span className="text-6xl">💕</span>
              </div>
              <h2 className="text-3xl font-bold text-rose-600 text-center mb-6">
                My Dearest [Her Name],
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  I've been thinking about us a lot lately, and I wanted to tell you something that's been on my heart.
                </p>
                <p>
                  From the moment we met, you brought something special into my life that I never knew I needed. Your laughter, your smile, the way you see the world – everything about you is unique and beautiful.
                </p>
                <p>
                  I know things haven't always been perfect between us, but I want you to know that every moment we shared was precious to me. The coffee dates, the late-night talks, the adventures we went on – those are memories I'll cherish forever.
                </p>
                <p>
                  I made this website not to ask for anything in return, but to show you how much you mean to me. You deserve to know how amazing you are and how much of an impact you've had on my life.
                </p>
                <p className="font-semibold text-rose-600">
                  Thank you for being you. Thank you for the love, the laughter, and the memories. You will always hold a special place in my heart.
                </p>
              </div>
              <div className="text-center mt-8">
                <p className="text-2xl text-rose-500 mb-4">With all my love,</p>
                <p className="text-xl font-semibold text-gray-800">[Your Name]</p>
              </div>
              <button
                onClick={() => setOpenLetter(false)}
                className="mt-8 w-full bg-rose-100 hover:bg-rose-200 text-rose-600 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Close ❤️
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Memories Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-4">
            Our Memories
          </h2>
          <p className="text-center text-rose-400 text-lg mb-12 max-w-2xl mx-auto">
            Every moment with you was a gift
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <div
                key={index}
                onClick={() => setActivePhoto(activePhoto === index ? null : index)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{memory.caption}</p>
                  </div>
                  {activePhoto === index && (
                    <div className="absolute inset-0 bg-rose-500/30 flex items-center justify-center">
                      <span className="text-4xl animate-pulse">💕</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons I Love You */}
      <section className="relative z-10 py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-12">
            Reasons You're Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-3xl">
                  {["✨", "💫", "🌟", "💖", "🌸", "🌺"][index]}
                </span>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Message */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              You Are Beautiful Inside and Out
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Never forget how amazing you are. You have a heart of gold and a smile that can brighten anyone's day. I'm so grateful to have known you.
            </p>
            <button
              onClick={() => setShowMessage(!showMessage)}
              className="bg-white text-rose-500 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-all duration-300 shadow-lg"
            >
              {showMessage ? "Hide Message" : "A Special Note"}
            </button>
            {showMessage && (
              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-6 animate-fade-in">
                <p className="text-white text-lg italic">
                  "If I had to choose between loving you and breathing, I would use my last breath to say I love you."
                </p>
                <p className="text-white/80 mt-4">— Unknown</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-9xl mb-8 block animate-pulse">💕</span>
          <h2 className="text-4xl md:text-6xl font-bold text-rose-600 mb-6">
            I Will Always Care
          </h2>
          <p className="text-xl text-rose-400 mb-12 max-w-2xl mx-auto">
            No matter where life takes us, you will always be in my heart. I wish you nothing but happiness, love, and success in everything you do.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Love", "Joy", "Happiness", "Success", "Peace", "Adventure"].map((word, index) => (
              <div
                key={index}
                className="bg-rose-100 text-rose-600 px-6 py-3 rounded-full font-semibold"
              >
                {["❤️", "✨", "🌟", "🎉", "☮️", "🎒"][index]} {word}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-rose-400">
        <p className="text-lg">Made with all my love 💕</p>
        <p className="mt-2">[Your Name] © {new Date().getFullYear()}</p>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;