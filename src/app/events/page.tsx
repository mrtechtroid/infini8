"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import DayCard from "@/components/DayCard";
import events from "./events.json";
import "../globals.css";
import EventModal from './EventModal';
import CustomScrollbar from "@/components/Scrollbar";


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
  time:string,
  venue:string
  registration_form:string
}

function EventCard({  id,name,spocs,about,rulespdf,prizePool,fee,image,registration_form,time,venue }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };
  return (
    <>
          {/* Back Button */}
          <button 
        onClick={handleGoBack} 
        className="fixed top-4 left-4 z-20 bg-blue-600 rounded-full p-2 hover:bg-yellow-600 transition-colors  group"
      >
        <ChevronLeft 
          className="w-8 h-8 text-white hover:text-black group-hover:scale-110 transition-transform" 
        />
      </button>
      <div
        className="faq-card opacity-0 transform translate-y-8 -rotate-x-10 transition-all duration-700"
        style={{
          transitionDelay: `${id}ms`,
        }}
      >
        <div
          className="group relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg relative">
            {/* Red top border with pattern */}
            <div className="h-1 bg-red-600 bg-[url('/japanese-pattern.png')] bg-repeat-x" />

            {/* Image Container */}
            <div className="aspect-[3/4] w-full relative overflow-hidden">
              <img
                src={image || "/infin8_logo.png"}
                alt={name}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />

              {/* Decorative corners */}

              {/* Prize pool badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-white text-sm font-bold">₹{(prizePool / 1000)}K</span>
              </div>
            </div>

            {/* Content area */}
            <div className=" bg-black p-4">
              <h3 className="text-xl  text-white mb-1 font-['The Last Shuriken']"
                style={{ fontFamily: 'The Last Shuriken, sans-serif' }}
              >
                {name}
              </h3>
              <p className="text-red-400 font-['Hina Mincho']"
                style={{ fontFamily: 'Hina Mincho, sans-serif' }}>
                Prize Pool: ₹{prizePool.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={{ id,name, prizePool, image,spocs:spocs,about,rulespdf,fee,registration_form,time,venue }}
      />
    </>
  );
}


export default function EventsPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.faq-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-red-600 bg-[url('/eventsbg.jpg')] bg-repeat relative">
    {/* Left Onigiri */}
    <div className="fixed left-0 bottom-0 pointer-events-none z-10">
      <img 
        src="/onigiri_l.png" 
        alt="Left Onigiri" 
        className="w-32 md:w-48 lg:w-64 object-contain"
      />
    </div>

    {/* Right Onigiri */}
    <div className="fixed right-0 bottom-0 pointer-events-none z-10">
      <img 
        src="/onigiri_r.png" 
        alt="Right Onigiri" 
        className="w-32 md:w-48 lg:w-64 object-contain"
      />
    </div>

    <CustomScrollbar />

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="rounded-lg bg-[url('/events_bg.png')] bg-cover bg-no-repeat bg-center py-6 px-8 sm:py-8 sm:px-12 md:py-12 md:px-16 lg:py-16 lg:px-20 relative max-w-[90%] sm:max-w-[80%] md:max-w-[60%] mx-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black font-sans"
              style={{ fontFamily: 'The Last Shuriken, sans-serif' }}
            >
              EVENTS
            </h1>
          </div>
        </div>



        <section id="day1" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <DayCard dayNumber="1" />
            {events.events.day1.map((event) => (
              <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              prizePool={event.prizePool}
              image={"/infin8_logo.png"}
              about={event.about}
              rulespdf={event.rulespdf}
              spocs={event.spocs}
              fee={event.fee}
              registration_form={event.registration_form}
              time={event.time}
              venue={event.venue}
              />
            ))}
          </div>
        </section>

        <section id="day2">
          <div className="w-full mb-12 flex justify-center">
              <img
                  src="/day2_event_divider.png"
                  alt="Day 2 divider"
              />
          </div>


          
          {/* Day 2 Divider and Section */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <DayCard dayNumber="2" />
              {events.events.day2.map((event) => (
                <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                prizePool={event.prizePool}
                image={"/infin8_logo.png"}
                about={event.about}
                rulespdf={event.rulespdf}
                spocs={event.spocs}
                fee={event.fee}
                registration_form={event.registration_form}
                time={event.time}
                venue={event.venue}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="day3">
          <div className="w-full mb-12 flex justify-center">
              <img
                  src="/day3_event_divider.png"
                  alt="Day 3 divider"
              />
          </div>

          {/* Day 3 Divider and Section */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <DayCard dayNumber="3" />
              {events.events.day3.map((event) => (
                <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                prizePool={event.prizePool}
                image={"/infin8_logo.png"}
                about={event.about}
                rulespdf={event.rulespdf}
                spocs={event.spocs}
                fee={event.fee}
                registration_form={event.registration_form}
                time={event.time}
                venue={event.venue}
                />
              ))}
            </div>
          </div>
        </section> 


      </div>
    </div>
  );
}
