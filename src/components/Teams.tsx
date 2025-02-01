"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const TeamGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth < window.innerHeight);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const teamSections = [
    {
      title: "Organizing Committee 学生会",
      members: [
        {
          name: "Dheeraj Muppiri",
          role: "President",
          accent: "bg-purple-500",
          image: '/Dheeraj_oc.png',
          linkedInUrl: 'https://www.linkedin.com/in/dheeraj-muppiri-5b177a2aa/',
        },
        {
          name: "Gathik Jindal",
          role: "President",
          accent: "bg-purple-500",
          image: '/Gathik_oc.png',
          linkedInUrl: 'https://www.linkedin.com/in/gathik-jindal-10851428b/',
        },
        {
          name: "Siddharth Ayathu",
          role: "Vice President",
          accent: "bg-indigo-500",
          image: '/Ayathu_oc.png',
          linkedInUrl: 'https://www.linkedin.com/in/siddharth-ayathu-843565327/',

        },
        {
          name: "Akshat Betala",
          role: "Secretary",
          accent: "bg-pink-500",
          image: '/Betala-oc.png',
          linkedInUrl: 'https://www.linkedin.com/in/akshat-betala-2303682a7/',

        },
        {
          name: "Niveditha Varma",
          role: "Treasurer",
          accent: "bg-orange-500",
          image: '/Niveditha_oc.png',
          linkedInUrl: '/team',

        },
        {
          name: "Bhavya",
          role: "Event Coordinator",
          accent: "bg-teal-500",
          image: '/Bhavya_oc.png',
          linkedInUrl: 'https://www.linkedin.com/in/bhavya-joshi-52a919202/',

        },
        {
          name: "Aira",
          role: "Event Coordinator",
          accent: "bg-teal-500",
          image: '/Aira_sac.png',
          linkedInUrl: 'https://www.linkedin.com/in/airajain/',

        },
        {
          name: "Harshal",
          role: "Event Coordinator",
          accent: "bg-teal-500",
          image: '/Harshal_sac.png',
          linkedInUrl: 'https://www.linkedin.com/in/harshal-gujarathi-2ab432239/',

        },
        {
          name: "Prabhas",
          role: "Event Coordinator",
          accent: "bg-teal-500",
          image: '/Prabhas_oc.png',
          linkedInUrl: 'https://www.linkedin.com/in/jaswant-prabhas-jupalli-75732b280/',

        },
      ],
    },
    {
      title: "Website ウェブサイト",
      members: [
        {
          name: "Prakrititz Borah",
          role: "Lead Developer",
          accent: "bg-blue-500",
          image: '/Prakrititz_design_webdev.png',
          linkedInUrl: 'https://www.linkedin.com/in/prakrititz-borah-348b04287/',

        },
        {
          name: "Pramatha Rao",
          role: "UX Designer",
          accent: "bg-green-500",
          image: '/Pramatha_webdev.png',
          linkedInUrl: 'https://www.linkedin.com/in/pramatharao/',

        },
        {
          name: "Sriram Srikanth",
          role: "Frontend Developer",
          accent: "bg-yellow-500",
          image: '/Sriram_webdev.png',
          linkedInUrl: 'https://www.linkedin.com/in/sriram-srikanth-066376284/',

        },
        {
          name: "Unnath Chittimalla",
          role: "Backend Developer",
          accent: "bg-red-500",
          image: '/Unnath_webdev.png',
          linkedInUrl: 'https://www.linkedin.com/in/unnath-chittimalla-08aaaa287/',

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
          image: '/Hemanth_nothing.png',
          linkedInUrl: 'https://www.linkedin.com/in/hemanth-mada-41337229a/',

        },
        {
          name: "Tahir Khadarabad",
          role: "Graphic Designer",
          accent: "bg-lime-500",
          image: '/Tahir_design.png',
          linkedInUrl: 'https://www.linkedin.com/in/tahirkhadarabad/',

        },
        {
          name: "Nathan Mathew",
          role: "UI Designer",
          accent: "bg-emerald-500",
          image: '/Nathan_design.png',
          linkedInUrl: 'https://www.linkedin.com/in/nathanmv/',

        },
        {
          name: "Chaitya Shah",
          role: "Motion Designer",
          accent: "bg-fuchsia-500",
          image: '/team/Chaitya.png',
          linkedInUrl: 'https://www.linkedin.com/in/chaitya-shah-0a7589267/',

        },
        {
          name: "Siddharth Menon",
          role: "Illustrator",
          accent: "bg-amber-500",
          image: '/Menon_design.png',
          linkedInUrl: 'https://www.linkedin.com/in/siddharth-menon-2192a1278/',

        },
        {
          name: "Navya Balaji",
          role: "Brand Designer",
          accent: "bg-rose-500",
          image: '/Navya_design.png',
          linkedInUrl: 'https://www.linkedin.com/in/navya-balaji-657821320/',

        },
        {
          name: "Tharanth ",
          role: "Brand Designer",
          accent: "bg-rose-500",
          image: '/Tharanth_design.png',
          linkedInUrl: '/team',

        },
        {
          name:"Srikar Vellanki",
          role:"Poster Designer",
          accent:"bg-rose-500",
          image:"/Srikar_design.png",
          linkedInUrl:'/team'
        }
      ],
    },
  ];
  const handleMouseMove = (e:any) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };
  const getLayerStyle = (depth:any) => {
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
      className={`w-full min-h-screen overflow-x-hidden ${isMobile ? "mobile-class" : ""}`}
      onMouseMove={handleMouseMove}
    >
      <button
        onClick={handleGoBack}
        className="fixed top-4 left-4 z-50 bg-black/50 hover:bg-black/70 
        rounded-full p-2 transition-colors duration-200 
        md:top-6 md:left-6"
      >
        <ArrowLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
      </button>
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
                      // fill
                      style={{ objectFit: "cover" }}
                      className="object-cover rounded-t-lg z-0 absolute top-0 left-0"
                    />

                    <div
                      className={`absolute -right-12 -top-12 w-24 h-48 ${member.accent} 
                                  transform rotate-45 opacity-80 z-10`}
                    />

                    <div className="relative h-[100%] w-[100%] p-6 border-4 border-red-400 top-0 left-0 z-10">
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
                          onClick={() => window.open(member.linkedInUrl, '_blank')}
                          className="mt-4 px-6 py-2 bg-black text-white font-bold tracking-wider 
            uppercase transform -skew-x-12 transition-all duration-300 
            hover:bg-gray-800 hover:scale-105 hover:shadow-lg
            relative overflow-hidden group text-sm"
                        >
                          <span className="relative z-10 group-hover:opacity-0">
                            プロフィールを見る
                          </span>
                          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            View Profile
                          </span>
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