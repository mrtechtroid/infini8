"use client"

import { useState, useEffect } from 'react';
import DayCard from "@/components/DayCard";
import Scrollbar from "@/components/Scrollbar";
import events from "./events.json";
import { Menu, X } from 'lucide-react';
import "../globals.css";
import EventModal from './EventModal';

interface Spoc{
  name:string,
  contact:string
}

interface EventCardProps {
  id: number;
  name: string;
  spocs:Array<Spoc>,
  about:string,
  rulespdf:string,
  prizePool: number;
  fee:number,
  image: string;
  registration_form:string
}

function EventCard({  id,name,spocs,about,rulespdf,prizePool,fee,image,registration_form}: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    // <a href={`/events/${event_id}`}>
    <>
    <Scrollbar/>
      <div
        className="relative group p-2 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col rounded-lg overflow-hidden shadow-lg">
          {/* Red border top with Japanese pattern */}
          <div className="h-1 bg-red-600 bg-[url('/japanese-pattern.png')] bg-repeat-x" />

          <div className="aspect-[3/4] w-full bg-[#1a103c] relative overflow-hidden">
            <img
              src={image || "/infin8_logo.png"}
              alt={name}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-600 opacity-70" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-600 opacity-70" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-600 opacity-70" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-600 opacity-70" />
          </div>

          <div className="bg-red-600 h-1 bg-[url('/japanese-pattern.png')] bg-repeat-x" />

          <div className="bg-white rounded-b-lg">
            <div className="px-4 py-3 text-center">
              <h3 className="text-base font-medium text-gray-900 truncate font-['The Last Shuriken']" style={{fontFamily:"The Last Shuriken"}}>
                {name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 font-serif">
                Prize Pool: ₹{prizePool.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <EventModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={{ id,name, prizePool, image,spocs:spocs,about,rulespdf,fee,registration_form}}
      />
    </>
  );
}

export default function EventsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-red-600 bg-[url('/japanese-texture.png')] bg-repeat relative" style={{backgroundImage: "url('/eventsbg.jpg')"}}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#1a103c]/95 backdrop-blur shadow-lg border-b-2 border-red-600">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:justify-center md:w-full">
              {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
                <a
                  key={day}
                  href={`#day${index + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`day${index + 1}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2 text-white font-['The Last Shuriken'] hover:text-red-600 transition-colors relative group"
                >
                  {day}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
                <a
                  key={day}
                  href={`#day${index + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`day${index + 1}`)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-white font-['The Last Shuriken'] hover:bg-red-600/20 rounded-md transition-colors"
                >
                  {day}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Title Section with Japanese-style frame */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[url('/events_bg.png')] bg-contain bg-no-repeat bg-center py-4 px-12 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-black opacity-70" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-black opacity-70" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-black opacity-70" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-black opacity-70" />
            <h1 className="text-3xl md:text-5xl font-['The Last Shuriken'] font-bold text-black" style={{fontFamily:"The Last Shuriken"}}>EVENTS</h1>
          </div>
        </div>

        {/* Day 1 Section */}
        <section id="day1" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <DayCard dayNumber="1" />
            {events.events.day1.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                prizePool={event.prizePool}
                image={event.image}
                about={event.about}
                rulespdf={event.rulespdf}
                spocs={event.spocs}
                fee={event.fee}
                registration_form={event.registration_form}
              />
            ))}
          </div>
        </section>

        {/* Day 2 Section */}
        <section id="day2">
          <div className="w-full mb-12 flex justify-center">
            <img
              src="/day2_event_divider.png"
              alt="Day 2 divider"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <DayCard dayNumber="2" />
              {events.events.day2.map((event) => (
                <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                prizePool={event.prizePool}
                image={event.image}
                about={event.about}
                rulespdf={event.rulespdf}
                spocs={event.spocs}
                fee={event.fee}
                registration_form={event.registration_form}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Day 3 Section */}
        <section id="day3">
          <div className="w-full mb-12 flex justify-center">
            <img
              src="/day3_event_divider.png"
              alt="Day 3 divider"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <DayCard dayNumber="3" />
              {events.events.day3.map((event) => (
                <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                prizePool={event.prizePool}
                image={event.image}
                about={event.about}
                rulespdf={event.rulespdf}
                spocs={event.spocs}
                fee={event.fee}
                registration_form={event.registration_form}
                  />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}