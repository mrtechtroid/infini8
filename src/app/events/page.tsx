"use client"

import DayCard from "@/components/DayCard";
import CustomScrollbar from "@/components/Scrollbar";
import events1 from "./events_day1.json";
import events2 from "./events_day2.json";
import events3 from "./events_day3.json";
import "../globals.css";

interface EventCardProps {
  name: string
  prizePool: number
  image: string
  event_id:number
}

function EventCard({ name, prizePool, image,event_id }: EventCardProps) {
  return (
    <a href={`/events/${event_id}`}><div className="relative group p-2">
      <div className="flex flex-col rounded-lg  overflow-hidden">
        <div className="aspect-[3/4] w-full bg-[#1a103c]">
          <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" />
        </div>
        <div className="bg-red-600 h-2" />
        <div className="bg-white rounded-lg mx-2 mb-2 mt-1">
          <div className="px-4 py-3 text-center">
            <h3 className="text-base font-medium font-['The Last Shuriken'] text-gray-900 truncate ">{name}</h3>
            <p className="text-sm text-gray-600 mt-1">Prize Pool: {prizePool}</p>
          </div>
        </div>
      </div>
    </div>
    </a>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-red-600 relative">
      <CustomScrollbar/>
      <div className="container mx-auto px-6 py-12">


        <section id="day1">
          <div className="text-center mb-12">
            <div className="inline-block bg-[url('/events_bg.png')] bg-contain bg-no-repeat bg-center py-4 px-12">
              <h1 className="text-3xl md:text-5xl font-['The Last Shuriken'] font-bold text-black">EVENTS</h1>
            </div>
          </div>

          {/* Day 1 Section */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <DayCard dayNumber="1" />
              {events1.map((event) => (
                <EventCard event_id={event.id} key={event.id} name={event.name} prizePool={event.prizePool} image={event.image} />
              ))}
            </div>
          </div>
        </section>


        <section id ="day2">
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
              {events2.map((event) => (
                <EventCard event_id={event.id} key={event.id} name={event.name} prizePool={event.prizePool} image={event.image} />
              ))}
            </div>
          </div>
        </section>


        <section id = "day3">
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
              {events3.map((event) => (
                <EventCard event_id={event.id} key={event.id} name={event.name} prizePool={event.prizePool} image={event.image} />
              ))}
            </div>
          </div>
        </section> 


      </div>
    </div>
  )
}

