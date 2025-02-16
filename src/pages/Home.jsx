import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Phone, Timer, Trophy, User, Award } from 'lucide-react';
import BackgroundImage from '../assets/hero.webp';
import BackgroundImageRespo from '../assets/hero_responsive.webp';
import Logo from '../assets/logo.svg';
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import EventCard from '../components/EventCard/EventCard';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white">
            {/* Hero Section */}
            <header
                className="relative py-16 flex items-center justify-center text-center px-4 header"
                
            >
                <img src={BackgroundImage} alt="EMIRISE 2K25" className="absolute hidden sm:block inset-0 object-cover w-full h-full z-0" />
                <img src={BackgroundImageRespo} alt="EMIRISE 2K25" className="absolute sm:hidden inset-0 object-cover w-full h-full z-0" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-red-900/70 z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="mb-8">
                        <img src={Logo} alt="EMIRISE" className="h-24 sm:h-28 mx-auto" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-white">EMIRISE 2K25</h1>
                    <p className="text-xl max-w-[360px] sm:max-w-full text-center mx-auto sm:text-2xl mb-8 text-red-100">Innovating the Future: Exploring the Power of Knowledge and Entrepreneurship</p>
                    <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12 text-sm sm:text-md flex-wrap">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 justify-center flex-nowrap whitespace-nowrap">
                            <Calendar className="mr-2" />
                            <span>February 24-25, 2025</span>
                        </div>
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 flex-nowrap whitespace-nowrap">
                            <MapPin className="mr-2" />
                            <span>EMEA College</span>
                        </div>
                    </div>
                    <CountdownTimer />
                    <div className="mt-12 space-y-4 text-sm sm:text-md">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdMa02fYoukATqTYKI-NILCzaXpWYp8wjy5E0cfGYRAh8TgoA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors mx-2"
                        >
                            Register for Events
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScRdlCROl46mrMX7YfUuTv2uOZ0NOHtVY9SCPUQOelOB9w9yQ/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full transition-colors mx-2"
                        >
                            <Award className="inline-block mr-2" />
                            Student Entrepreneurs
                        </a>
                    </div>
                </div>
            </header>

            {/* Events Section */}
            <section className="py-10 px-4" id="events">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <EventCard
                            title="IDEATHON"
                            coordinators={[
                                { name: "Sinan", phone: "9061034005" },
                                { name: "Mehrin", phone: "9880021044" }
                            ]}
                            prizepool="₹17,000"
                        />
                        <EventCard
                            title="BIZ QUIZ"
                            coordinators={[
                                { name: "Rashid", phone: "7736715006" },
                                { name: "Rizwan", phone: "7025872660" }
                            ]}
                            prizepool="₹8,000"
                        />
                        <EventCard
                            title="TREASURE HUNT"
                            coordinators={[
                                { name: "Fabin", phone: "62358 22330" },
                                { name: "Salman", phone: "9526855307" }
                            ]}
                            prizepool="₹11,000"
                        />
                    </div>
                </div>
            </section>

            {/* Student Entrepreneurs Summit Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-red-900/50 to-gray-900/50 backdrop-blur-sm" id="summit">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Student Entrepreneurs Summit</h2>
                    <p className="text-lg leading-relaxed mb-8 text-left">
                        Join us for an exclusive summit celebrating student entrepreneurship. Present your ideas, connect with industry leaders, and compete for the prestigious Student Entrepreneurs Award.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScRdlCROl46mrMX7YfUuTv2uOZ0NOHtVY9SCPUQOelOB9w9yQ/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-colors  justify-center"
                    >
                        <Award className="mr-2" />
                        Apply for Student Entrepreneurs
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 bg-black/20" id="about">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">About EMIRISE</h2>
                    <p className="text-lg leading-relaxed mb-8 text-left">
                        The Entrepreneurs' Summit & Idea Presentation Competition at EMEA College is designed to inspire creativity and nurture entrepreneurial talent.
                        By connecting thought leaders, innovators, and aspiring entrepreneurs, the summit fosters collaboration, innovation, and problem-solving.
                        The event provides an excellent opportunity for students to present their ideas, receive feedback from industry experts, and gain insights into entrepreneurship.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <footer className="py-12 px-4 bg-black/40">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6">Student Coordinators</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                        <div className="flex items-center justify-center">
                            <User className="mr-2" />
                            <span> Sunain:</span>
                            <Phone className="ml-4 mr-1" size={14} />
                            <a href="tel:+918281775230" className="hover:text-red-300">+91 82817 75230</a>
                        </div>
                        <div className="flex items-center justify-center">
                            <User className="mr-2" />
                            <span>Rashid:</span>
                            <Phone className="ml-4 mr-1" size={14} />
                            <a href="tel:+917736715006" className="hover:text-red-300">+91 77367 15006</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;