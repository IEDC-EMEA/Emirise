import { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock3, Timer, PartyPopper } from 'lucide-react';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-02-24').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 relative overflow-hidden flex flex-col items-center justify-center text-white p-4">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            <Sparkles className="text-amber-300/20 w-4 h-4" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center space-y-12 w-full max-w-4xl">
        {/* Main Title */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 p-1 rounded-2xl shadow-lg">
            <div className="bg-gradient-to-b from-indigo-950 to-purple-900 rounded-xl px-8 py-6 backdrop-blur-lg">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-300 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-shimmer">
                EMIRISE
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mt-4 text-gray-200">
                EMEA College Management Fest 2K25
              </h2>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="space-y-8">
          <p className="text-xl font-light flex items-center justify-center gap-2">
            <PartyPopper className="w-6 h-6 text-amber-300 animate-bounce" />
            <span>Your Friendly Neighborhood Management Fest is Coming Soon...</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: days, label: "Days", icon: Calendar },
              { value: hours, label: "Hours", icon: Clock3 },
              { value: minutes, label: "Minutes", icon: Timer },
              { value: seconds, label: "Seconds", icon: Timer }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30"></div>
                  <div className="relative bg-gradient-to-b from-purple-900/80 to-indigo-950/80 rounded-xl p-6 border border-pink-500/20 backdrop-blur-sm">
                    <item.icon className="w-6 h-6 text-amber-300 mx-auto mb-2" />
                    <div className="text-4xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-300 font-light">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-lg text-gray-300 font-light italic">
            "Get ready for an experience that will stick with you!"
          </p>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-300/20 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-amber-300/20 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-amber-300/20 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-300/20 rounded-br-3xl"></div>
      </div>
    </div>
  );
}

export default App;