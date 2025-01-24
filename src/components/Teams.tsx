"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const TeamGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const teamSections = [
    {
      title: "Website ウェブサイト",
      members: [
        {
          name: "Prakrititz Borah",
          role: "Lead Developer",
          accent: "bg-blue-500",
          image: `/Prakrititz.png`,
        },
        {
          name: "Pramatha Rao",
          role: "UX Designer",
          accent: "bg-green-500",
          image: `/PramathaRao.jpg`,
        },
        {
          name: "Sriram Srikanth",
          role: "Frontend Developer",
          accent: "bg-yellow-500",
          image: `/SriramSrikanth.jpg`,
        },
        {
          name: "Unnath Chittimalla",
          role: "Backend Developer",
          accent: "bg-red-500",
          image: `/Unnath.png`,
        },
      ],
    },
    {
      title: "Student Affairs Council 学生会",
      members: [
        {
          name: "Gathik Jindal",
          role: "President",
          accent: "bg-purple-500",
          image: `/GathikJindal.jpg`,
        },
        {
          name: "Kenji Suzuki",
          role: "Vice President",
          accent: "bg-indigo-500",
          image: `/KenjiSuzuki.jpg`,
        },
        {
          name: "Sakura Ito",
          role: "Secretary",
          accent: "bg-pink-500",
          image: `/SakuraIto.jpg`,
        },
        {
          name: "Hiroshi Kimura",
          role: "Treasurer",
          accent: "bg-orange-500",
          image: `/HiroshiKimura.jpg`,
        },
        {
          name: "Aiko Kobayashi",
          role: "Event Coordinator",
          accent: "bg-teal-500",
          image: `/AikoKobayashi.jpg`,
        },
      ],
    },
    {
      title: "Design デザイン",
      members: [
        {
          name: "Hemanth Mada",
          role: "Creative Director",
          accent: "bg-cyan-500",
          image: `/Hemanth.png`,
        },
        {
          name: "Santosh Vodnala",
          role: "Graphic Designer",
          accent: "bg-lime-500",
          image: `/SantoshVodnala.jpg`,
        },
        {
          name: "Kazuki Yamaguchi",
          role: "UI Designer",
          accent: "bg-emerald-500",
          image: `/KazukiYamaguchi.jpg`,
        },
        {
          name: "Chaitya Shah",
          role: "Motion Designer",
          accent: "bg-fuchsia-500",
          image: `/Chaitya.png`,
        },
        {
          name: "Tahir Khandarbad",
          role: "Illustrator",
          accent: "bg-amber-500",
          image: `/TahirKhandarbad.jpg`,
        },
        {
          name: "Shota Nakajima",
          role: "Brand Designer",
          accent: "bg-rose-500",
          image: `/ShotaNakajima.jpg`,
        },
      ],
    },
  ];
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };
  const getLayerStyle = (depth) => {
    const xMove = (mousePosition.x - 0.5) * depth * 50;
    const yMove = (mousePosition.y - 0.5) * depth * 50;
    const scrollMove = scrollPosition * depth * 0.1;

    return {
      transform: `translate(${xMove}px, ${yMove + scrollMove}px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  return (
    <main
      className="w-full min-h-screen overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full">
        {/* Parallax Layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Layers */}
          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/layer-1.png")',
              ...getLayerStyle(0.2),
            }}
          />

          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/layer0.png")',
              ...getLayerStyle(0.4),
            }}
          />

          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/layer1.png")',
              ...getLayerStyle(0.6),
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20">
          {/* Heading */}
          <div className="pt-16 pb-8 text-center">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white 
                transform -skew-x-12 inline-block px-8 py-4
                bg-[url('/forground.svg')] bg-cover bg-center shadow-2xl"
              style={{ fontFamily: "The Last Shuriken, cursive" }}
            >
              Meet our Team
            </h1>
          </div>

          {/* Team Sections */}
          {teamSections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="mb-16">
              <h2
                style={{ fontFamily: "The Last Shuriken, cursive" }}
                className="text-4xl font-bold text-white text-center mb-8
             transform -skew-x-12 w-full px-6 py-2
             bg-black bg-opacity-70 shadow-xl"
              >
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {section.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="relative group flex flex-col h-[400px] md:h-[450px] lg:h-[400px] 
                backdrop-blur-sm rounded-lg overflow-hidden shadow-xl 
             transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      fill="true"
                      className="object-cover rounded-t-lg"
                      priority
                    />

                    <div
                      className={`absolute -right-12 -top-12 w-24 h-48 ${member.accent} 
                                  transform rotate-45 opacity-80 z-10`}
                    />

                    <div className="relative h-full w-full p-6 border-4 border-red-400">
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 opacity-90" /> */}

                      <div className="relative z-20 h-full flex flex-col justify-between">
                        <h3
                          className="text-xl font-bold text-black transform -skew-x-12
             border-b-2 border-black pb-2 mb-4
             bg-white px-2 inline-block"
                        >
                          """ {member.name}
                        </h3>
                        <button
                          className="mt-4 px-6 py-2 bg-black text-white font-bold tracking-wider 
                                        uppercase transform -skew-x-12 transition-all duration-300 
                                        hover:bg-gray-800 hover:scale-105 hover:shadow-lg
                                        relative overflow-hidden group text-sm"
                        >
                          <span className="relative z-10">詳細を見る</span>
                          <div
                            className="absolute inset-0 h-full w-0 bg-white opacity-20 
                                        transform -skew-x-12 transition-all duration-300 
                                        group-hover:w-full"
                          />
                        </button>
                      </div>

                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Foreground Layers */}
        <div
          className="fixed inset-0 w-full h-full bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: 'url("/layer2.png")',
            ...getLayerStyle(0.8),
          }}
        />

        <div
          className="fixed inset-0 w-full h-full bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: 'url("/layer3.png")',
            ...getLayerStyle(1),
          }}
        />
      </div>
    </main>
  );
};

export default TeamGrid;
