import { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-blue-950 relative overflow-hidden flex flex-col items-center justify-center text-white p-4">
      {/* Web pattern background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute w-full h-full border-2 border-red-600 rounded-full"
               style={{
                 transform: `scale(${1 + i * 0.2}) rotate(${i * 45}deg)`,
                 opacity: 1 - i * 0.2
               }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 w-full max-w-4xl">
        {/* Main Title */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-1 rounded-lg shadow-lg animate-pulse">
          <div className="bg-blue-950 rounded-lg px-8 py-6">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
              EMIRISE
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mt-2 text-white">
              EMEA College Management Fest 2K24
            </h2>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-1 rounded-xl shadow-lg">
          <div className="bg-blue-950 rounded-lg p-6 md:p-8">
            <p className="text-xl mb-6">Your Friendly Neighborhood Management Fest is Coming Soon...</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: minutes, label: "Minutes" },
                { value: seconds, label: "Seconds" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-red-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-blue-900 rounded-lg p-4 border border-red-500/20">
                    <div className="text-4xl font-bold text-red-500">{item.value}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spider Symbol */}
        <div className="mt-8 animate-bounce">
          <div className="w-16 h-16 mx-auto relative">
            <svg 
              viewBox="0 0 24 24" 
              className="w-16 h-16 text-red-500"
              fill="currentColor"
            >
              <path d="M16.5 2.25C14.75 2.25 12.5 3 12 3.25C11.5 3 9.25 2.25 7.5 2.25C4.25 2.25 1.5 4.75 1.5 8.25C1.5 11.5 3.75 13.75 7.25 17.25C9.25 19.25 11.25 21.25 11.75 21.75C11.875 21.875 12.125 21.875 12.25 21.75C12.75 21.25 14.75 19.25 16.75 17.25C20.25 13.75 22.5 11.5 22.5 8.25C22.5 4.75 19.75 2.25 16.5 2.25Z" />
            </svg>
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
          </div>
        </div>

        <p className="text-lg text-gray-300">
          Get ready for an experience that will stick with you!
        </p>
      </div>

      {/* Corner Webs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-red-600/30"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-red-600/30"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-red-600/30"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-red-600/30"></div>
      </div>
    </div>
  );
}

export default App;