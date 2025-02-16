import React from 'react';
import { Trophy, User, Phone } from 'lucide-react';


 function EventCard({ title, coordinators, prizepool }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="mb-4">
                <Trophy className="inline-block mr-2" />
                <span className="font-semibold">Prize Pool: {prizepool}</span>
            </div>
            <div>
                <h4 className="font-semibold mb-2">Program Coordinators:</h4>
                {coordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <User className="inline-block mr-2" />
                        <span>{coordinator.name}</span>
                        <Phone className="inline-block ml-4 mr-1" size={14} />
                        <a href={`tel:${coordinator.phone}`} className="hover:text-red-300">{coordinator.phone}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCard;