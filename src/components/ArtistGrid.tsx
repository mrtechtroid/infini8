import React, { useState, useEffect } from 'react';

const ArtistGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const artists = [
    {
      title: "山の景色 (Mountain View)",
      copy: "息をのむような山々の眺めと冒険をお楽しみください",
      button: "詳細を見る",
      accent: "bg-red-500"
    },
    {
      title: "海辺へ (To The Beach)",
      copy: "心安らぐ波音と共に、最高の休暇を",
      button: "詳細を見る",
      accent: "bg-blue-500"
    },
    {
      title: "砂漠の旅 (Desert Journey)",
      copy: "果てしない砂漠で、新たな発見を",
      button: "詳細を見る",
      accent: "bg-yellow-500"
    },
    {
      title: "銀河探検 (Galaxy Quest)",
      copy: "無限の宇宙で、夢の冒険を始めましょう",
      button: "詳細を見る",
      accent: "bg-purple-500"
    }
  ];

  // Handle mouse movement
  const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate layer movements based on mouse and scroll
  const getLayerStyle = (depth:number) => {
    const xMove = (mousePosition.x - 0.5) * depth * 50;
    const yMove = (mousePosition.y - 0.5) * depth * 50;
    const scrollMove = scrollPosition * depth * 0.1;

    return {
      transform: `translate(${xMove}px, ${yMove + scrollMove}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <main 
      className="w-full max-w-[100vw] overflow-hidden min-h-screen py-8 bg-black"
      onMouseMove={handleMouseMove}
    >
      <div className="relative h-[800px] max-w-7xl mx-auto">
        {/* Parallax Layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Layers */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("./layer-1.png")',
              ...getLayerStyle(0.2)
            }}
          />
          
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("./layer0.png")',
              ...getLayerStyle(0.4)
            }}
          />
          
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("./layer1.png")',
              ...getLayerStyle(0.6)
            }}
          />

          {/* Content Grid */}
          <div className="relative z-30 flex flex-nowrap gap-6 p-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="relative group flex flex-col min-w-[300px] h-[400px] md:min-w-0 md:w-full 
                         bg-opacity-90 bg-white backdrop-blur-sm rounded-lg overflow-hidden shadow-xl 
                         transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`absolute -right-12 -top-12 w-24 h-48 ${artist.accent} 
                              transform rotate-45 opacity-80 z-10`} />
                
                <div className="relative h-full w-full p-6 border-8 border-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 opacity-90" />
                  
                  <div className="relative z-20 h-full flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-black transform -skew-x-12 
                                 border-b-4 border-black pb-2 mb-4">
                      {artist.title}
                    </h2>
                    
                    <p className="font-medium text-gray-700 leading-relaxed 
                                transform transition-all duration-500 group-hover:scale-105">
                      {artist.copy}
                    </p>
                    
                    <button className="mt-6 px-8 py-3 bg-black text-white font-bold tracking-wider 
                                    uppercase transform -skew-x-12 transition-all duration-300 
                                    hover:bg-gray-800 hover:scale-105 hover:shadow-lg
                                    relative overflow-hidden group">
                      <span className="relative z-10">{artist.button}</span>
                      <div className="absolute inset-0 h-full w-0 bg-white opacity-20 
                                    transform -skew-x-12 transition-all duration-300 
                                    group-hover:w-full" />
                    </button>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black" />
                </div>
              </div>
            ))}
          </div>

          {/* Foreground Layers */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: 'url("./layer2.png")',
              ...getLayerStyle(0.8)
            }}
          />
          
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: 'url("./layer3.png")',
              ...getLayerStyle(1)
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default ArtistGrid;