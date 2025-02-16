import React, { useEffect, useState } from 'react';

 function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const eventDate = new Date('2025-02-24T00:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid grid-cols-4 gap-4 max-w-[320px] sm:max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                    <div className="text-xl sm:text-4xl font-bold">{value}</div>
                    <div className="text-[10px] sm:text-sm uppercase">{unit}</div>
                </div>
            ))}
        </div>
    );
}

export default CountdownTimer;