import React from 'react';
import { Calendar, MapPin, Phone, Award, User, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/card';
import BackgroundImage from '../assets/hero.webp';
import BackgroundImageRespo from '../assets/hero_responsive.webp';
import Logo from '../assets/logo.svg';
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-gray-900 text-white">
            {/* Hero Section */}
            <header className="relative min-h-screen flex items-center justify-center text-center px-4">
                <img 
                    src={BackgroundImage} 
                    alt="EMIRISE 2K25" 
                    className="absolute hidden sm:block inset-0 object-cover w-full h-full z-0 brightness-50" 
                />
                <img 
                    src={BackgroundImageRespo} 
                    alt="EMIRISE 2K25" 
                    className="absolute sm:hidden inset-0 object-cover w-full h-full z-0 brightness-50" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-red-950/80 z-0"></div>
                
                <div className="relative z-10 max-w-5xl mx-auto">
                    <div className="mb-8 animate-fade-in-down">
                        <img src={Logo} alt="EMIRISE" className="h-32 sm:h-36 mx-auto hover:scale-105 transition-transform" />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-red-200 via-white to-red-200">
                        EMIRISE 2K25
                    </h1>
                    <p className="text-xl sm:text-3xl mb-12 text-red-50 max-w-3xl mx-auto font-light leading-relaxed">
                        Innovating the Future: Exploring the Power of Knowledge and Entrepreneurship
                    </p>
                    
                    <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
                        <div className="flex items-center bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-full px-8 py-3 transition-all">
                            <Calendar className="mr-3 text-red-300" />
                            <span className="text-lg">February 24-25, 2025</span>
                        </div>
                        <div className="flex items-center bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-full px-8 py-3 transition-all">
                            <MapPin className="mr-3 text-red-300" />
                            <span className="text-lg">EMEA College</span>
                        </div>
                    </div>

                    <CountdownTimer />

                    <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdMa02fYoukATqTYKI-NILCzaXpWYp8wjy5E0cfGYRAh8TgoA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                        >
                            Register for Events
                            <ArrowRight className="ml-2" />
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScRdlCROl46mrMX7YfUuTv2uOZ0NOHtVY9SCPUQOelOB9w9yQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                        >
                            <Award className="mr-2" />
                            Student Entrepreneurs
                        </a>
                    </div>
                </div>
            </header>

            {/* Events Section */}
            <section className="py-20 px-4" id="events">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-white">
                         Events
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "IDEATHON",
                                description: "Present your innovative ideas and solutions to real-world problems.",
                                coordinators: [
                                    { name: "Sinan", phone: "9061034005" },
                                    { name: "Mehrin", phone: "9880021044" }
                                ],
                                prizepool: "₹17,000"
                            },
                            {
                                title: "BIZ QUIZ",
                                description: "Test your knowledge of business, economics, and current affairs.",
                                coordinators: [
                                    { name: "Rashid", phone: "7736715006" },
                                    { name: "Rizwan", phone: "7025872660" }
                                ],
                                prizepool: "₹8,000"
                            },
                            {
                                title: "TREASURE HUNT",
                                description: "Navigate through challenging clues and puzzles in this exciting adventure.",
                                coordinators: [
                                    { name: "Fabin", phone: "62358 22330" },
                                    { name: "Salman", phone: "9526855307" }
                                ],
                                prizepool: "₹11,000"
                            }
                        ].map((event, index) => (
                            <Card key={index} className="bg-white/5 backdrop-blur-md border-0 hover:bg-white/10 transition-all transform hover:scale-105">
                                <CardHeader>
                                    <h3 className="text-2xl font-bold text-center text-red-200">{event.title}</h3>
                                    <p className="text-gray-300 mt-2 text-center">{event.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-center mb-4">
                                        <Award className="mr-2 text-yellow-500" />
                                        <span className="text-xl font-semibold text-yellow-500">{event.prizepool}</span>
                                    </div>
                                    <div className="space-y-2">
                                        {event.coordinators.map((coordinator, idx) => (
                                            <div key={idx} className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300">{coordinator.name}</span>
                                                <a href={`tel:+91${coordinator.phone}`} className="text-red-300 hover:text-red-200">
                                                    <Phone className="inline-block mr-1" size={14} />
                                                    {coordinator.phone}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summit Section */}
            <section className="py-24 px-4 bg-gradient-to-r from-red-950/80 to-gray-900/80 backdrop-blur-lg" id="summit">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-white">
                        Student Entrepreneurs Summit
                    </h2>
                    <p className="text-xl leading-relaxed mb-12 text-gray-200">
                        Join us for an exclusive summit celebrating student entrepreneurship. Present your ideas, connect with industry leaders, and compete for the prestigious Student Entrepreneurs Award.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScRdlCROl46mrMX7YfUuTv2uOZ0NOHtVY9SCPUQOelOB9w9yQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white/15 hover:bg-white/25 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Award className="mr-2" />
                        Apply Now
                        <ExternalLink className="ml-2" size={18} />
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-4 bg-black/30" id="about">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-white">
                        About EMIRISE
                    </h2>
                    <p className="text-xl leading-relaxed mb-8 text-gray-200">
                        The Entrepreneurs' Summit & Idea Presentation Competition at EMEA College is designed to inspire creativity and nurture entrepreneurial talent.
                        By connecting thought leaders, innovators, and aspiring entrepreneurs, the summit fosters collaboration, innovation, and problem-solving.
                        The event provides an excellent opportunity for students to present their ideas, receive feedback from industry experts, and gain insights into entrepreneurship.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-4 bg-black/60">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-red-200">Contact Coordinators</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                        {[
                            { name: "Sunain", phone: "8281775230" },
                            { name: "Rashid", phone: "7736715006" }
                        ].map((coordinator, index) => (
                            <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-md rounded-full px-6 py-3 hover:bg-white/10 transition-all">
                                <User className="mr-2 text-red-300" size={18} />
                                <span className="mr-2">{coordinator.name}:</span>
                                <Phone className="mr-1 text-red-300" size={14} />
                                <a href={`tel:+91${coordinator.phone}`} className="hover:text-red-300 transition-colors">
                                    +91 {coordinator.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;